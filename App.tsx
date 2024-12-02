import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreenASSM from './Components/HomeScreen/HomeScreenASSM';
import OrderPage from './Components/OrderPage/OrderPage';
const stackNavigator = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <stackNavigator.Navigator
     initialRouteName="HomeScreenASSM">
      <stackNavigator.Screen
        options={{header: () => null}}
        name="HomeScreenASSM"
        component={HomeScreenASSM}
      />
      <stackNavigator.Screen
        options={{header: () => null}}
        name="OrderPage"
        component={OrderPage}
      />
      </stackNavigator.Navigator>
      </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})