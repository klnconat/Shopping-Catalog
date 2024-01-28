import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import StackNavigation from './StackNavigation';

import HomeStackNavigation from './HomeStackNavigation'
import DetailStackNavigation from './DetailStackNavigation'

import StackNavigation from './StackNavigation'

import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator screenOptions={{headerShown: false, tabBarStyle: {height: 68, borderTopRightRadius: 20, borderTopLeftRadius: 20}}}>
        <Tab.Screen name="KEŞFET" component={HomePage} options={{
          tabBarIcon: () => (
            <Image source={require('../assets/homePage/Kesfet.png')} />
          ),
          tabBarLabelStyle:styles.tabBarLabelStyle,
        }}/>
        <Tab.Screen name="Portal" component={HomePage} options={{
          tabBarIcon: () => (
            <Image source={require('../assets/homePage/PORTAL.png')} />
          ),
        tabBarLabel: '',
        }}/>
        <Tab.Screen name="DAHA CÜZDAN" component={HomePage} options={{
          tabBarIcon: () => (
            <Image source={require('../assets/homePage/Katıldıklarım.png')} />
          ),
          tabBarLabelStyle:styles.tabBarLabelStyle
        }}/>
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    margin: {
      marginBottom: 10,
    },
    tabBarLabelStyle:{color: '#1D1E1C',marginBottom: 10}
  });