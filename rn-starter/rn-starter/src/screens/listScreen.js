import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const friends = [
  { name: "Friend #1", Age: "20" },
  { name: "Friend #2", Age: "30" },
  { name: "Friend #3", Age: "40" },
  { name: "Friend #4", Age: "50" },
  { name: "Friend #5", Age: "60" },
];

const ListScreen = () => {
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.testStyle}>
            {item.name}-Age:{item.Age}
          </Text>
        );
      }}
    ></FlatList>
  );
};
const styles = StyleSheet.create({
  testStyle: {
    marginVertical: 50,
  },
});
export default ListScreen;
