import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "My name is SKG";
  return (
    <View>
      <Text style={styles.textStyle}>Getting Started with React Native</Text>
      <Text style={styles.subfont}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subfont: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
