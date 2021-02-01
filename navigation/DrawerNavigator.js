// ./navigation/DrawerNavigator.js 
// Maneja de manera independiente del stack y el tab las pantallas del drawer

import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { SettingStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import DrawerContent from "../screens/DrawerContent";
import About from "../screens/About";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={ (props) => <DrawerContent {...props} /> }>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Settings" component={SettingStackNavigator} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;