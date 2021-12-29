import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hello World SKG</Text>
      <Button
        onPress={() => props.navigation.navigate("Components")}
        title="Go to Component Demo"
      ></Button>
      <Button
        onPress={() => props.navigation.navigate("List")}
        title="Go to List Demo"
      ></Button>
      <Button
        onPress={() => props.navigation.navigate("Image")}
        title="Go to Image Demo Demo"
      ></Button>
      <Button
        onPress={() => props.navigation.navigate("Counter")}
        title="Go to Counter Demo"
      ></Button>
      <Button
        onPress={() => props.navigation.navigate("Color")}
        title="Go to Color Demo"
      ></Button>
      <Button
        onPress={() => props.navigation.navigate("Square")}
        title="Go to Square Screen Demo"
      ></Button>
      <Button
        onPress={() => props.navigation.navigate("Text")}
        title="Go to Text Screen Demo"
      ></Button>
      <Button
        onPress={() => props.navigation.navigate("Box")}
        title="Go to Box Screen Demo"
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
