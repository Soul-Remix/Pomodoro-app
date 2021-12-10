import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import Header from "./src/components/Header/Header";
import MainScreen from "./src/screens/MainScreen/MainScreen";
import useStore from "./src/store/store";

export default function App() {
  const background = useStore((state) => state.background);

  return (
    <SafeAreaView style={styles(background).mainContainer}>
      <View style={styles().container}>
        <Header />
        <MainScreen />
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = (background?: string) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: background,
    },
    container: {
      flex: 1,
      width: "100%",
      maxWidth: 700,
      margin: "auto",
      height: "100%",
    },
  });
