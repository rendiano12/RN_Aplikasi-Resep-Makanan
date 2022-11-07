import React, { useEffect, useState } from 'react';
import { Text, View, Image, FlatList, ScrollView } from 'react-native';
import styles from '../../styles';

function HalamanResepMakanan({ route, navigation }) {
    const { gambar } = route.params;
    const { waktu } = route.params;
    const { porsi } = route.params;
    const { recipe } = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(recipe)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);
    return (
        <ScrollView>
            <View style={styles.styleHalamanResep}>
                {isLoading ? <Text>Tunggu...</Text> :
                    (
                        <View style={styles.styleResep}>
                            <Image source={{ uri: gambar }} style={{ height: 150, width: 200, alignSelf: 'center' }} />
                            <Text>{''}</Text>
                            <Text style={{ color: 'black' }}>{`Waktu: ${waktu}\nPorsi: ${porsi}`}</Text>
                            {/* Bahan */}
                            <FlatList
                                data={data.data.ingredients}
                                keyExtractor={(title, items) => title}
                                renderItem={({ item }) => (
                                    <View style={styles.styleResep}>
                                        <Text style={{ color: 'black'}}>{`${item.title}:`}</Text>
                                        <FlatList
                                            data={item.items}
                                            keyExtractor={(item, qty) => item}
                                            renderItem={({ item }) => (
                                                <Text style={{ color: 'black' }}>{`- ${item.item} ${item.qty}`}</Text>
                                            )}
                                        />
                                        <Text>{''}</Text>
                                    </View>
                                )}
                            />
                            {/* Cara Memasak */}
                            <View style={styles.styleResep}>
                                <Text style={{ color: 'black' }}>Cara memasak:</Text>
                                <FlatList
                                    data={data.data.steps}
                                    keyExtractor={(num, step) => num}
                                    renderItem={({ item }) => (
                                        <Text style={{ color: 'black' }}>{`${item.num}. ${item.step}`}</Text>
                                    )}
                                />
                            </View>
                        </View>
                    )}
            </View>
        </ScrollView>
    );
}

export default HalamanResepMakanan;