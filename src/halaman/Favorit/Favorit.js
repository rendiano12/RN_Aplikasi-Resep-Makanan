import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Snackbar from 'react-native-snackbar';

import styles from '../../../styles';
import HalamanResepMakanan from '../Pencarian/HalamanResepMakanan';

function LogoTitle() {
    return (
        <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=1hMkq2LO5jnQcOcRoBn1hZn6Gv_s3XO4v', }}
            style={{ width: 55, height: 50 }} />
    );
}

function FavoritScreen({ navigation }) {
    const [favorit, setFavorit] = useState([]);

    // Mengambil Data Favorit Makanan
    function dataFavoritMakanan() {
        fetch('http://192.168.56.1:3000/favorit')
            .then((response) => response.json())
            .then((json) => setFavorit(json))
            .catch((error) => console.error(error));
    }
    // Menghapus Data Favorit Makanan
    function hapusFavoritMakanan(id) {
        let durasiSnackBar = setTimeout(() => {
            fetch(`http://192.168.56.1:3000/favorit/${id}`, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(() => console.log("Berhasil Menghapus Favorit Makanan"))
                .catch(error => console.log(error));
        }, 3000);
        Snackbar.show({
            text: 'Berhasil Menghapus',
            duration: Snackbar.LENGTH_LONG,
            action: {
                text: 'UNDO',
                textColor: 'green',
                onPress: () => {
                    clearTimeout(durasiSnackBar);
                },
            },
        });
    }
    useEffect(() => {
        dataFavoritMakanan();
    }, []);
    const renderMenu = [];
    for (let i = 0; i < favorit.length; i++) {
        const namaMakanan = favorit[i].key.split('-').map(v => v[0].toUpperCase() + v.slice(1)).filter(v => v != 'Resep').join(' ');
        renderMenu.push(
            <TouchableOpacity style={styles.styleTombol} onPress={() => navigation.navigate(namaMakanan, {
                gambar: favorit[i].thumb,
                waktu: favorit[i].times,
                porsi: favorit[i].serving,
                recipe: `https://masak-apa.tomorisakura.vercel.app/api/recipe/${favorit[i].key}`
            })}>
                <Image source={{ uri: favorit[i].thumb }}
                    style={styles.styleGambarTombol} />
                <Text style={styles.styleTeksTombol}>{namaMakanan}</Text>
                <TouchableOpacity style={{ alignSelf: 'flex-end', margin: 5 }} onPress={() => {
                    hapusFavoritMakanan(favorit[i].id);
                }}>
                    <Ionicons name="bookmark" size={22} color='yellow' />
                </TouchableOpacity>
            </TouchableOpacity>
        );
    }
    return (
        <View style={styles.styleFavorit}>
            <ScrollView>
                <View style={styles.styleFavorit}>
                    {renderMenu.length == 0
                        ? <Text style={{ marginVertical: 15, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Anda Belum Menambahkan Makanan Favorit</Text>
                        : renderMenu}
                </View>
            </ScrollView>
        </View>
    );
}

const FavoritStack = createStackNavigator();

function FavoritStackScreen() {
    const [resep, setResep] = useState([]);
    function dataResepMakanan() {
        fetch('http://192.168.56.1:3000/resep')
            .then((response) => response.json())
            .then((json) => setResep(json))
            .catch((error) => console.error(error));
    }
    useEffect(() => {
        dataResepMakanan();
    }, []);
    const renderMenu = [];
    for (let i = 0; i < resep.length; i++) {
        const namaMakanan = resep[i].key.split('-').map(v => v[0].toUpperCase() + v.slice(1)).filter(v => v != 'Resep').join(' ');
        renderMenu.push(
            <FavoritStack.Screen
                name={namaMakanan}
                component={HalamanResepMakanan}
                options={{
                    headerStyle: {
                        backgroundColor: '#769FCD',
                    },
                    headerTintColor: '#F7FBFC'
                }}
            />
        )
    }
    return (
        <FavoritStack.Navigator>
            <FavoritStack.Screen
                name="Favorit"
                component={FavoritScreen}
                options={{
                    headerStyle: { backgroundColor: '#769FCD' },
                    headerTitle: props => <LogoTitle {...props} />
                }}
            />
            {renderMenu}
        </FavoritStack.Navigator>
    );
}

export default FavoritStackScreen;