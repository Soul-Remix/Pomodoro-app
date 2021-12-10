import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import useStore from "../../store/store";
import TimeSettings from "../TimeSettings/TimeSettings";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const Settings = ({ isOpen, handleClose }: Props) => {
  const background = useStore((state) => state.background);

  return (
    <Modal animationType="slide" visible={isOpen} onRequestClose={handleClose}>
      <View style={styles(background).mainContainer}>
        <View style={styles().container}>
          <View style={styles().back}>
            <Pressable onPress={handleClose}>
              <MaterialIcons name="arrow-back" size={24} color="white" />
            </Pressable>
          </View>
          <Text style={styles().header}>Timer Setting</Text>
          <Text style={styles().text}>Time (minutes)</Text>
          <TimeSettings />
        </View>
      </View>
    </Modal>
  );
};

const styles = (bg?: string) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: bg,
    },
    container: {
      width: "95%",
      maxWidth: 700,
      marginLeft: "auto",
      marginRight: "auto",
    },
    back: {
      padding: 18,
      borderColor: "rgba(255, 255, 255, 0.38)",
      borderBottomWidth: 4,
    },
    header: {
      color: "white",
      textAlign: "center",
      fontSize: 32,
      marginTop: 20,
    },
    text: {
      fontSize: 16,
      color: "white",
      padding: 12,
    },
  });

export default Settings;
