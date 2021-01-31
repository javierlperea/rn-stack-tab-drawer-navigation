// ./screens/Contact.js

import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { globalStyles } from "../styles/globalStyles";

const Settings = () => {
  return (
    <View style={styles.center}>
      <Text style={ globalStyles.title }>This is the Settings screen</Text>
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

export default Settings;