import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The meal details Screen!</Text>
      <Button
        title="Back to Main Screen"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
