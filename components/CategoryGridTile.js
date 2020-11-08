import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CategoryGridTile = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onSelect}
      style={styles.gridItem}
    >
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  }, 
});

export default CategoryGridTile;
