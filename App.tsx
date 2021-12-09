import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Header from "./src/components/Header/Header";
import MainScreen from "./src/screens/MainScreen/MainScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Header />
        <MainScreen />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "rgb(217, 85, 80)",
  },
  container: {
    flex: 1,
    width: "100%",
    maxWidth: 700,
    margin: "auto",
  },
});
