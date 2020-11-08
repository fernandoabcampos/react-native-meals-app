import React from "react";
import { Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: { categoryId: itemData.item.id },
          });
        }}
        style={styles.gridItem}
      >
        <Text>{itemData.item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
