import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PencarianStackScreen from './src/halaman/Pencarian/Pencarian';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Beranda') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Pencarian') {
              iconName = focused
                ? 'search'
                : 'search-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#F7FBFC',
          tabBarInactiveTintColor: '#F7FBFC',
          tabBarStyle: { backgroundColor: '#769FCD' },
          headerShown: false
        })}
      >
        {/* <Tab.Screen name="Beranda" component={BerandaStackScreen} /> */}
        <Tab.Screen name="Pencarian" component={PencarianStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
} 