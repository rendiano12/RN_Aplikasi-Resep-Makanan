import React, { useEffect, useState } from 'react';
import { Text, View, Image, FlatList, ScrollView } from 'react-native';
import styles from '../../../styles';

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
                {isLoading ? <Text style={{ color: 'white', fontWeight: 'bold' }}>Tunggu...</Text> :
                    (
                        <View style={styles.styleResep}>
                            <Image source={{ uri: gambar }} style={{ height: 150, width: 200, alignSelf: 'center' }} />
                            <Text>{''}</Text>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>Waktu:
                                <Text style={{ color: 'black', fontWeight: 'normal' }}>{waktu}</Text>
                            </Text>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>Porsi:
                                <Text style={{ color: 'black', fontWeight: 'normal' }}>{porsi + '\n'}</Text>
                            </Text>
                            {/* Bahan */}
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>Bahan:</Text>
                            <FlatList
                                data={Object.values(data)[2].ingredient}
                                keyExtractor={ingredient => ingredient}
                                renderItem={({ item }) => (
                                    <View>
                                        <Text style={{ color: 'black' }}>{item}</Text>
                                    </View>
                                )}
                            />
                            {/* Cara Memasak */}
                            <View style={styles.styleResep}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>{'\n'}Cara Memasak:</Text>
                                <FlatList
                                    data={Object.values(data)[2].step}
                                    keyExtractor={step => step}
                                    renderItem={({ item }) => (
                                        <Text style={{ color: 'black' }}>{`${item[0]}) ${item.slice(2)}`}</Text>
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