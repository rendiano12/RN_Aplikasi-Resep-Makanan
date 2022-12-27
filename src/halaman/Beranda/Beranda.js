import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, RefreshControl, Modal, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from '../../../styles';
import HalamanResepMakanan from '../Pencarian/HalamanResepMakanan';

function LogoTitle() {
    return (
        <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=1hMkq2LO5jnQcOcRoBn1hZn6Gv_s3XO4v', }}
            style={{ width: 55, height: 50 }} />
    );
}

function BerandaScreen({ navigation }) {
    const [resep, setResep] = useState([]);
    const [favorit, setFavorit] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);

    // Data Resep Makanan
    function dataResepMakanan() {
        fetch('http://192.168.56.1:3000/resep')
            .then((response) => response.json())
            .then((json) => setResep(json))
            .catch((error) => console.error(error));
    }
    function dataFavoritMakanan() {
        fetch('http://192.168.56.1:3000/favorit')
            .then((response) => response.json())
            .then((json) => setFavorit(json))
            .catch((error) => console.error(error));
    }

    // Menambah Favorit Makanan
    function tambahFavoritMakanan(thumb, times, serving, key) {
        fetch('http://192.168.56.1:3000/favorit')
            .then((response) => response.json())
            .then((json) => setFavorit(json))
            .catch((error) => console.error(error));
        // Cek Daftar Favorit
        console.log(favorit.map(v => Object.values(v).slice(0, 4).join(''))[1]);
        console.log(thumb + times + serving + key);
        if (favorit.map(v => Object.values(v).slice(0, 4).join('')).some(v => v == thumb + times + serving + key)) {
            setModalVisible2(true);
        } else {
            fetch('http://192.168.56.1:3000/favorit', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    thumb: thumb,
                    times: times,
                    serving: serving,
                    key: key
                }),
            })
                .then(() => {
                    console.log('Favorit makanan telah ditambahkan');
                    setModalVisible(true);
                })
                .catch(error => console.log(error));
        }
    }

    useEffect(() => {
        dataResepMakanan();
        dataFavoritMakanan();
    }, []);

    // RefreshControl
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        acakResep(resep);
        wait(1500).then(() => setRefreshing(false));
    }, []);

    function acakResep(array) {
        for (let i = 0; i < array.length; i++) {
            const angka = Math.floor(Math.random() * array.length);
            [array[angka], array[i]] = [array[i], array[angka]];
        }
        return array;
    }

    const renderMenu = [];
    acakResep(resep);
    for (let i = 0; i < resep.length - 34; i++) {
        const namaMakanan = resep[i].key.split('-').map(v => v[0].toUpperCase() + v.slice(1)).filter(v => v != 'Resep').join(' ');
        renderMenu.push(
            <TouchableOpacity style={styles.styleTombol} onPress={() => navigation.navigate(namaMakanan, {
                gambar: resep[i].thumb,
                waktu: resep[i].times,
                porsi: resep[i].serving,
                recipe: `https://masak-apa.tomorisakura.vercel.app/api/recipe/${resep[i].key}`
            })}>
                <Image source={{ uri: resep[i].thumb }}
                    style={styles.styleGambarTombol} />
                <Text style={styles.styleTeksTombol}>{namaMakanan}</Text>
                <TouchableOpacity style={{ alignSelf: 'flex-end', margin: 5 }} onPress={() => {
                    tambahFavoritMakanan(
                        resep[i].thumb,
                        resep[i].times,
                        resep[i].serving,
                        resep[i].key
                    );
                }}>
                    <Ionicons name="bookmark-outline" size={22} color='black' />
                </TouchableOpacity>
            </TouchableOpacity>
        );
    }
    return (
        <View style={styles.styleBeranda}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <Text style={styles.styleTeksBeranda}>REKOMENDASI</Text>
                <View style={styles.styleBeranda}>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.styleContainerModal}>
                            <View style={styles.styleViewModal}>
                                <Text style={styles.styleTeksModal}>Berhasil Menambah Favorit Makanan.</Text>
                                <Button
                                    title="OK"
                                    onPress={() => setModalVisible(!modalVisible)}
                                    color="darkblue"
                                />
                            </View>
                        </View>
                    </Modal>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible2}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible2(!modalVisible2);
                        }}
                    >
                        <View style={styles.styleContainerModal}>
                            <View style={styles.styleViewModal}>
                                <Text style={styles.styleTeksModal}>Resep Sudah Ada di Daftar Favorit.</Text>
                                <Button
                                    title="OK"
                                    onPress={() => setModalVisible2(!modalVisible2)}
                                    color="darkblue"
                                />
                            </View>
                        </View>
                    </Modal>
                    {renderMenu}
                </View>
            </ScrollView>
        </View>
    );
}

const BerandaStack = createStackNavigator();

function BerandaStackScreen() {
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
            <BerandaStack.Screen
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
        <BerandaStack.Navigator>
            <BerandaStack.Screen
                name="Beranda"
                component={BerandaScreen}
                options={{
                    headerStyle: { backgroundColor: '#769FCD' },
                    headerTitle: props => <LogoTitle {...props} />
                }}
            />
            {renderMenu}
        </BerandaStack.Navigator>
    );
}


export default BerandaStackScreen;