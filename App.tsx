import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

import Header from "./src/components/Header/Header";
import Settings from "./src/components/Settings/Settings";
import MainScreen from "./src/screens/MainScreen/MainScreen";
import useStore from "./src/store/store";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const background = useStore((state) => state.background);

  const openModal = () => {
    setModalOpen((old) => !old);
  };

  return (
    <SafeAreaView style={styles(background).mainContainer}>
      <ScrollView style={styles().container}>
        <Header openSettings={openModal} />
        <MainScreen />
        <Settings isOpen={modalOpen} handleClose={openModal} />
      </ScrollView>
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
