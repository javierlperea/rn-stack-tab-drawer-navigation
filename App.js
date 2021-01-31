/* STACK NAVIGATOR
import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { MainStackNavigator } from "./navigation/StackNavigator";

 const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
export default App;
 */

/* TAB NAVIGATOR
import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabNavigator from "./navigation/TabNavigator";

 const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
export default App */

/* DRAWER NAVIGATOR */


import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./navigation/DrawerNavigator";

 const App = () => {
  return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
  );
}
export default App;