import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = (props) => {
  //   console.log(props);
  return (
    <View>
      <Text>{props.color}</Text>
      <Button
        onPress={() => props.onIncrease()}
        title={`Increse ${props.color}`}
      ></Button>
      <Button
        onPress={() => props.onDecrease()}
        title={`Decrease ${props.color}`}
      ></Button>
    </View>
  );
};

export default ColorCounter;
