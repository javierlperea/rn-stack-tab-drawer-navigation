// ./navigation/TabNavigator.js

import React from "react";
import { MainStackNavigator, SettingStackNavigator, CategoriesStackNavigator } from "./StackNavigator";

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
        activeColor="#162F3C"
        barStyle={{ backgroundColor: '#FFF' }}
        >
            <Tab.Screen 
                name="Home"
                component={MainStackNavigator}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                      <Icon name="home" fontsize={50} color={color} size={25} />
                    ),
                  }}
            />
            <Tab.Screen 
                name="Categories" 
                component={CategoriesStackNavigator} 
                options={{
                    tabBarLabel: 'Categories',
                    tabBarIcon: ({ color }) => (
                      <Icon name="list" color={color} size={26} />
                    ),
                  }}      
            />
            <Tab.Screen 
                name="Setting" 
                component={SettingStackNavigator} 
                options={{
                    tabBarLabel: 'Setting',
                    tabBarIcon: ({ color }) => (
                      <Icon name="settings" color={color} size={26} />
                    ),
                  }}      
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;