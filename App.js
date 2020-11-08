import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { useScreens } from "react-native-screens";

import MealsNavigator from "./navigation/MealsNavigator";

useScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "dosis-light": require("./assets/fonts/Dosis-Light.ttf"),
    "dosis-regular": require("./assets/fonts/Dosis-Regular.ttf"),
    "dosis-bold": require("./assets/fonts/Dosis-Medium.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return <MealsNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  font: {
    fontFamily: "dosis-regular",
    fontSize: 18,
  },
});
