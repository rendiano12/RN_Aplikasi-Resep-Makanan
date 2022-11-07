import React, { useState } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../../styles';
import HalamanResepMakanan from './HalamanResepMakanan';

function LogoTitle() {
    return (
        <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=1hMkq2LO5jnQcOcRoBn1hZn6Gv_s3XO4v', }}
            style={{ width: 55, height: 50 }} />
    );
}

// Resep Makanan
const resep = [
    {
        "id": "resep-bola-bola-kentang-keju",
        "title": "Resep Bola-Bola Kentang Keju, Menu MPASI Lezat Bergizi",
        "time": "1jam",
        "servings": "4 Porsi",
        "difficulty": "Cukup Rumit",
        "recipe": "http://api-food-recipe.herokuapp.com/recipe/resep-bola-bola-kentang-keju",
        "images": "https://www.masakapahariini.com/wp-content/uploads/2022/11/resep-bola-bola-kentang-400x240.jpg"
    },
    {
        "id": "resep-baked-potato-brokoli-dan-keju",
        "title": "Resep Baked Potato Brokoli dan Keju, Rasanya Seenak Makan di Restoran",
        "time": "1jam 30mnt",
        "servings": "4 Porsi",
        "difficulty": "Mudah",
        "recipe": "http://api-food-recipe.herokuapp.com/recipe/resep-baked-potato-brokoli-dan-keju", "images": "https://www.masakapahariini.com/wp-content/uploads/2022/10/resep-baked-potato-400x240.jpg"
    },
    {
        "id": "resep-timlo-solo",
        "title": "Resep Timlo Khas Kota Solo, Hidangan Berkuah Hangat Menyegarkan",
        "time": "1jam 30mnt",
        "servings": "4 Porsi",
        "difficulty": "Mudah",
        "recipe": "http://api-food-recipe.herokuapp.com/recipe/resep-timlo-solo",
        "images": "https://www.masakapahariini.com/wp-content/uploads/2022/11/resep-timlo-khas-solo-400x240.jpg"
    },
    {
        "id": "resep-kue-ku",
        "title": "Resep Kue Ku, Ide Lezat Suguhan Baru di Rumah",
        "time": "2jam",
        "servings": "4 Porsi",
        "difficulty": "Cukup Rumit",
        "recipe": "http://api-food-recipe.herokuapp.com/recipe/resep-kue-ku",
        "images": "https://www.masakapahariini.com/wp-content/uploads/2022/10/resep-kue-ku-400x240.jpg"
    },
    {
        "id": "resep-soto-ayam-santan",
        "title": "Resep Soto Ayam Santan, Ide Menu Makan Enak Hari Ini",
        "time": "1jam 30mnt",
        "servings": "4 Porsi",
        "difficulty": "Mudah",
        "recipe": "http://api-food-recipe.herokuapp.com/recipe/resep-soto-ayam-santan",
        "images": "https://www.masakapahariini.com/wp-content/uploads/2022/10/resep-soto-ayam-santan-400x240.jpg"
    },
    {
        "id": "resep-sup-matahari",
        "title": "Resep Sup Matahari Khas Solo, Warna Warni Makanan Kaya Gizi",
        "time": "1jam 30mnt",
        "servings": "4 Porsi",
        "difficulty": "Mudah",
        "recipe": "http://api-food-recipe.herokuapp.com/recipe/resep-sup-matahari",
        "images": "https://www.masakapahariini.com/wp-content/uploads/2022/10/resep-sup-matahari-400x240.jpg"
    },
    {
        "id": "resep-overnight-oats-mango-compote",
        "title": "Resep Overnight Oats Mango Compote, Sarapan Sehat Tanpa Harus Masak",
        "time": "4jam",
        "servings": "2 Porsi",
        "difficulty": "Mudah",
        "recipe": "http://api-food-recipe.herokuapp.com/recipe/resep-overnight-oats-mango-compote",
        "images": "https://www.masakapahariini.com/wp-content/uploads/2022/10/resep-overnight-oat-mango-compote-400x240.jpg"
    },
    {
        "id": "resep-telur-bistik",
        "title": "Resep Telur Bistik, Sajian CIta Rasa Restoran untuk di Rumah",
        "time": "1jam",
        "servings": "2 Porsi",
        "difficulty": "Cukup Rumit",
        "recipe": "http://api-food-recipe.herokuapp.com/recipe/resep-telur-bistik",
        "images": "https://www.masakapahariini.com/wp-content/uploads/2019/06/shutterstock_128718047-400x240.jpg"
    },
    {
        "id": "resep-rendang-daging-sapi",
        "title": "Resep Rendang Daging Sapi, Menu Lebaran Spesial Tahun Ini",
        "time": "2jam",
        "servings": "4 Porsi",
        "difficulty": "Cukup Rumit",
        "recipe": "http://api-food-recipe.herokuapp.com/recipe/resep-rendang-daging-sapi",
        "images": "https://www.masakapahariini.com/wp-content/uploads/2022/09/resep-kalio-daging-780x440.jpg"
    },
    {
        "id": "resep-tumis-sawi-hijau-dan-ayam",
        "title": "Resep Tumis Sawi Hijau dengan Ayam, Menu Rumahan yang Praktis",
        "time": "30mnt",
        "servings": "4 Porsi",
        "difficulty": "Mudah",
        "recipe": "http://api-food-recipe.herokuapp.com/recipe/resep-tumis-sawi-hijau-dan-ayam",
        "images": "https://www.masakapahariini.com/wp-content/uploads/2019/06/tumis-sawi-hijau-dan-ayam-400x240.jpg"
    },
    {
        "id": "resep-nasi-tim-beras-merah-jamur-kecap",
        "title": "Resep Nasi Tim Beras Merah Jamur Kecap",
        "time": "1jam",
        "servings": "4 Porsi",
        "difficulty": "Cukup Rumit",
        "recipe": "http://api-food-recipe.herokuapp.com/recipe/resep-nasi-tim-beras-merah-jamur-kecap",
        "images": "https://www.masakapahariini.com/wp-content/uploads/2019/11/nasi-tim-beras-merah-400x240.jpg"
    },
    {
        "id": "resep-kepiting-asam-manis",
        "title": "Resep Kepiting Asam Manis, Rasa Lezatnya Bikin Penasaran",
        "time": "50mnt",
        "servings": "3 Porsi",
        "difficulty": "Cukup Rumit",
        "recipe": "http://api-food-recipe.herokuapp.com/recipe/resep-kepiting-asam-manis",
        "images": "https://www.masakapahariini.com/wp-content/uploads/2019/11/shutterstock_1187855428-400x240.jpg"
    },
    {
        "id": "resep-bakwan-sayur",
        "title": "Resep Bakwan Sayur, Kudapan Sore Kesukaan Keluarga",
        "time": "15jam",
        "servings": "4 Porsi",
        "difficulty": "Mudah",
        "recipe": "http://api-food-recipe.herokuapp.com/recipe/resep-bakwan-sayur",
        "images": "https://www.masakapahariini.com/wp-content/uploads/2018/06/bakwan_sayur_MAHI-6-400x240.jpg"
    },
    {
        "id": "resep-oseng-daging-kambing-bumbu-rica",
        "title": "Resep Oseng Daging Kambing Bumbu Rica, Meriahkan Idul Adha Kamu",
        "time": "45mnt",
        "servings": "4 Porsi",
        "difficulty": "Mudah",
        "recipe": "http://api-food-recipe.herokuapp.com/recipe/resep-oseng-daging-kambing-bumbu-rica",
        "images": "https://www.masakapahariini.com/wp-content/uploads/2022/07/oseng-daging-kambing-featured-400x240.jpg"
    },
    {
        "id": "resep-semur-daging-sapi-kecap-bango",
        "title": "Resep Semur Daging Sapi Kecap yang Empuk, Enak dan Sederhana",
        "time": "50mnt",
        "servings": "6 Porsi",
        "difficulty": "Mudah",
        "recipe": "http://api-food-recipe.herokuapp.com/recipe/resep-semur-daging-sapi-kecap-bango",
        "images": "https://www.masakapahariini.com/wp-content/uploads/2018/04/semur-daging-sapi-sederhana-400x240.png"
    },
    {
        "id": "resep-bebek-kuah-semur-kelapa",
        "title": "Resep Bebek Kuah Semur Kelapa, Sajian Hangat Saat Musim Hujan",
        "time": "1jam",
        "servings": "4 Porsi",
        "difficulty": "Cukup Rumit",
        "recipe": "http://api-food-recipe.herokuapp.com/recipe/resep-bebek-kuah-semur-kelapa",
        "images": "https://www.masakapahariini.com/wp-content/uploads/2019/11/shutterstock_341813042-400x240.jpg"
    },
    {
        "id": "resep-keripik-kentang-balado-daun-jeruk",
        "title": "Resep Keripik Kentang Balado Daun Jeruk, Suguhan Nikmat untuk Lebaran",
        "time": "1jam",
        "servings": "8 Porsi",
        "difficulty": "Cukup Rumit",
        "recipe": "http://api-food-recipe.herokuapp.com/recipe/resep-keripik-kentang-balado-daun-jeruk",
        "images": "https://www.masakapahariini.com/wp-content/uploads/2022/04/keripik-kentang-balado-1-400x240.jpg"
    },
    {
        "id": "resep-bakso-ikan-tenggiri",
        "title": "Resep Bakso Ikan Tenggiri Kuah Kecap, Spesial untuk Keluarga",
        "time": "1jam",
        "servings": "4 Porsi",
        "difficulty": "Cukup Rumit",
        "recipe": "http://api-food-recipe.herokuapp.com/recipe/resep-bakso-ikan-tenggiri",
        "images": "https://www.masakapahariini.com/wp-content/uploads/2019/11/shutterstock_706556137-400x240.jpg"
    }
];

// Bagian Tombol
function BerandaScreen({ navigation }) {
    const [text, setText] = useState('');
    const renderMenu = [];
    for (let i = 0; i < resep.length; i++) {
        const namaMakanan = resep[i].title.split(',')[0].split(' ').filter(v => v != 'Resep').join(' ');
        if (namaMakanan.toLowerCase().includes(text.toLowerCase())) {
            renderMenu.push(
                <TouchableOpacity style={styles.styleTombol} onPress={() => navigation.navigate(namaMakanan, {
                    gambar: resep[i].images,
                    waktu: resep[i].time,
                    porsi: resep[i].servings,
                    recipe: resep[i].recipe
                })}>
                    <Image source={{ uri: resep[i].images }}
                        style={styles.styleGambarTombol} />
                    <Text style={styles.styleTeksTombol}>{namaMakanan}</Text>
                </TouchableOpacity>
            );

        }
    }
    return (
        <View style={styles.styleBeranda}>
            <ScrollView>
                <View style={styles.styleBeranda}>
                    <View style={styles.styleContainerPencarian}>
                        <Ionicons name="search" size={16} color='green' />
                        <TextInput
                            style={styles.stylePencarian}
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

const BerandaStack = createStackNavigator();

// Halaman Resep
function BerandaStackScreen() {
    const renderMenu = [];
    for (let i = 0; i < resep.length; i++) {
        const namaMakanan = resep[i].title.split(',')[0].split(' ').filter(v => v != 'Resep').join(' ');
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