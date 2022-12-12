import React, { useState } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { openDatabase } from 'react-native-sqlite-storage';
import styles from '../../../styles';
import HalamanResepMakanan from './HalamanResepMakanan';

function LogoTitle() {
    return (
        <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=1hMkq2LO5jnQcOcRoBn1hZn6Gv_s3XO4v', }}
            style={{ width: 55, height: 50 }} />
    );
}

// Database
const db = openDatabase({
    name: 'MakananFavorit.db'
});

// Resep Makanan
const resep = [
    {
        "title": "Resep Ayam Kalasan Sambal Jeruk Nipis, Santap Siang Semakin Semarak",
        "thumb": "https://www.masakapahariini.com/wp-content/uploads/2019/09/ayam-kalasan-6-400x240.jpg",
        "key": "resep-ayam-kalasan-sambal-jeruk-nipis",
        "times": "1jam",
        "serving": "4 Porsi",
        "difficulty": "Mudah"
    },
    {
        "title": "Kreasi Resep Rendang Crispy yang Beda dari Yang Lain",
        "thumb": "https://www.masakapahariini.com/wp-content/uploads/2020/10/rendang-crispy-400x240.jpg",
        "key": "resep-rendang-crispy",
        "times": "2jam",
        "serving": "4 Porsi",
        "difficulty": "Cukup Rumit"
    },
    {
        "title": "Es Krim Fresh Mango Frutilicious dari Wall’s Solero Trio",
        "thumb": "https://www.masakapahariini.com/wp-content/uploads/2020/05/fresh-mango-frutilicious-400x240.jpg",
        "key": "resep-fresh-mango-frutilicious",
        "times": "10mnt",
        "serving": "2 Porsi",
        "difficulty": "Mudah"
    },
    {
        "title": "Cara Membuat Martabak Mini Gurih Bumbu Aceh untuk Camilan Sore",
        "thumb": "https://www.masakapahariini.com/wp-content/uploads/2020/12/Martabak-Mini-Telur-2-400x240.jpg",
        "key": "resep-martabak-mini-gurih",
        "times": "1jam",
        "serving": "4 Porsi",
        "difficulty": "Cukup Rumit"
    },
    {
        "title": "Resep Guava Smuz, Hidangan Penutup Menyegarkan untuk Ramadan",
        "thumb": "https://www.masakapahariini.com/wp-content/uploads/2020/04/buavita2-400x240.jpg",
        "key": "guava-smuz-hidangan-penutup",
        "times": "1jam",
        "serving": "12 Porsi",
        "difficulty": "Mudah"
    },
    {
        "title": "Resep Sop Daging Sapi Enak dan Gurih, Mudah Dibuat di Rumah",
        "thumb": "https://www.masakapahariini.com/wp-content/uploads/2019/01/sop-daging-sapi-400x240.jpg",
        "key": "resep-sop-daging-sapi",
        "times": "1jam",
        "serving": "3 Porsi",
        "difficulty": "Mudah"
    },
    {
        "title": "Resep Tempe Orek Teri Pedas Manis, Lauk Pelengkap yang Bikin Ketagihan",
        "thumb": "https://www.masakapahariini.com/wp-content/uploads/2021/08/Resep-tempe-orek-teri-400x240.jpeg",
        "key": "resep-tempe-orek-teri-pedas-manis",
        "times": "45mnt",
        "serving": "4 Porsi",
        "difficulty": "Mudah"
    },
    {
        "title": "Resep Soto Kudus, Menu Praktis, Enak, dan Bikin Segar",
        "thumb": "https://www.masakapahariini.com/wp-content/uploads/2020/02/soto-kudus-7-400x240.jpg",
        "key": "resep-soto-kudus",
        "times": "40mnt",
        "serving": "4 Porsi",
        "difficulty": "Mudah"
    },
    {
        "title": "Resep Laksa Bogor, Street Food Paling Hits dari Kota Hujan",
        "thumb": "https://www.masakapahariini.com/wp-content/uploads/2020/07/Laksa-Bogor-400x240.jpg",
        "key": "resep-laksa-bogor",
        "times": "1jam 15mnt",
        "serving": "4 Porsi",
        "difficulty": "Cukup Rumit"
    },
    {
        "title": "Resep Jus Buah Jeruk Jelly Susu, Penyegar Sepulang Tarawih",
        "thumb": "https://www.masakapahariini.com/wp-content/uploads/2022/04/resep-jus-buah-jeruk-jelly-sus-400x240.jpg",
        "key": "resep-jus-buah-jeruk-jelly-susu",
        "times": "30mnt",
        "serving": "4 Porsi",
        "difficulty": "Mudah"
    }
];

// Bagian Tombol
function PencarianScreen({ navigation }) {
    const [text, setText] = useState('');
    const renderMenu = [];
    for (let i = 0; i < resep.length; i++) {
        const namaMakanan = resep[i].key.split('-').map(v => v[0].toUpperCase() + v.slice(1)).filter(v => v != 'Resep').join(' ');
        if (namaMakanan.toLowerCase().includes(text.toLowerCase())) {
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
                </TouchableOpacity>
            );
        }
    }
    return (
        <View style={styles.stylePencarian}>
            <ScrollView>
                <View style={styles.stylePencarian}>
                    <View style={styles.styleContainerPencarian}>
                        <Ionicons name="search" size={16} color='green' />
                        <TextInput
                            style={styles.styleTabPencarian}
                            placeholder="Cari..."
                            placeholderTextColor='lightgray'
                            onChangeText={newText => setText(newText)}
                            defaultValue={text}
                        />
                    </View>
                    {renderMenu}
                </View>
            </ScrollView>
        </View>
    );
}

const PencarianStack = createStackNavigator();

// Halaman Resep
function PencarianStackScreen() {
    const renderMenu = [];
    for (let i = 0; i < resep.length; i++) {
        const namaMakanan = resep[i].key.split('-').map(v => v[0].toUpperCase() + v.slice(1)).filter(v => v != 'Resep').join(' ');
        renderMenu.push(
            <PencarianStack.Screen
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
        <PencarianStack.Navigator>
            <PencarianStack.Screen
                name="Pencarian"
                component={PencarianScreen}
                options={{
                    headerStyle: { backgroundColor: '#769FCD' },
                    headerTitle: props => <LogoTitle {...props} />
                }}
            />
            {renderMenu}
        </PencarianStack.Navigator>
    );
}

export default PencarianStackScreen;