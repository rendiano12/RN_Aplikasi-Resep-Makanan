import React, {Component} from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from './screens/Home';
// import Login from './screens/Login';
// import Signup from './screens/Signup';
import Menu from '../';
// import Proteksi from './screens/Proteksi';
// import Apotek from './screens/Apotek';
// import Ceklab from './screens/Ceklab';
// import Lainya from './screens/Lainya';
// import PelayananKesehatan from './screens/PelayananKesehatan';
// import Konsultasi from './screens/Konsultasi';
// import Imunisasi from './screens/Imunisasi';
// import Jadwal from './screens/Jadwal';
// import Info from './screens/Info';
// import Profil from './screens/Profil';
// import Pembayaran from './screens/Pembayaran';




const UntitledStack = createStackNavigator();
function UntitledStackScreen () {
    return (
      <NavigationContainer>
      <UntitledStack.Navigator screenOptions = {{headerShown : false}}>
  <UntitledStack.Screen name = "Home" component={Home}/>
  <UntitledStack.Screen name = "Login" component={Login}/>
  <UntitledStack.Screen name = "Signup" component={Signup}/>
  <UntitledStack.Screen name = "Menu" component={Menu}/>
   <UntitledStack.Screen name = "Proteksi" component={Proteksi}/>
   <UntitledStack.Screen name = "Apotek" component={Apotek}/>
   <UntitledStack.Screen name = "Ceklab" component={Ceklab}/>
   <UntitledStack.Screen name = "Lainya" component={Lainya}/>
    <UntitledStack.Screen name = "PelayananKesehatan" component={PelayananKesehatan}/>
    <UntitledStack.Screen name = "Konsultasi" component={Konsultasi}/>
     <UntitledStack.Screen name = "Imunisasi" component={Imunisasi}/>
     <UntitledStack.Screen name = "Jadwal" component={Jadwal}/>
     <UntitledStack.Screen name = "Info" component={Info}/>
     <UntitledStack.Screen name = "Profil" component={Profil}/>
     <UntitledStack.Screen name = "Pembayaran" component={Pembayaran}/>




  

  </UntitledStack.Navigator>
  </NavigationContainer>
    );
}
<TouchableOpacity onPress={() => {
  showSnackbar();
	props.navigation.navigate("Menu");
}}
	style={styles.button2}
>
	<Text style={styles.text}>Login</Text>
</TouchableOpacity>

export default UntitledStackScreen;