// ./screens/Home.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../styles/globalStyles";

const Home = () => {

  const navigation = useNavigation();

  return (
    <View style={[ styles.center, globalStyles.container ]}>
      <Text style={ globalStyles.title }>This is the home screen</Text>
      <Button 
        style={ globalStyles.btnPrimary }
        onPress={() => navigation.navigate('About')}
      >
        <Text style={ globalStyles.textBtn }>Go to About Screen</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Home;