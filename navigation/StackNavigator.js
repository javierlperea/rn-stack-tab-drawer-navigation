// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/Ionicons'

import Home from "../screens/Home";
import About from "../screens/About";
import Settings from "../screens/Settings";
import Categories from "../screens/Categories";
import Product from "../screens/Product";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#162F3C',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
  headerTitleAlign: 'center',
};

// MainStackNavigator, SettingStackNavigator, CategoriesStackNavigator van a ser mostradas en el bottom tab navigator 

const MainStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={ () => ({
          headerLeft: () => 
            <Icon.Button 
              name='ios-menu' 
              size={25}
              backgroundColor="#162F3C"
              onPress={ () => navigation.openDrawer() }
            ></Icon.Button>
        })
        }
      />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
}

const SettingStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

const CategoriesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Categories" component={Categories} />
    </Stack.Navigator>
  );
}



export { MainStackNavigator, SettingStackNavigator, CategoriesStackNavigator };