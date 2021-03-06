import React from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import useStore from "../../store/store";
import TimeSettings from "../TimeSettings/TimeSettings";
import SettingSwitch from "../SettingSwitch/SettingSwitch";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const Settings = ({ isOpen, handleClose }: Props) => {
  const background = useStore((state) => state.background);
  const settings = useStore((state) => state.settings);
  const setSettings = useStore((state) => state.setSettings);

  return (
    <Modal animationType="slide" visible={isOpen} onRequestClose={handleClose}>
      <View style={styles(background).mainContainer}>
        <ScrollView style={styles().container}>
          <View style={styles().back}>
            <Pressable onPress={handleClose}>
              <MaterialIcons name="arrow-back" size={24} color="white" />
            </Pressable>
          </View>
          <Text style={styles().header}>Timer Setting</Text>
          <Text style={styles().text}>Time (minutes)</Text>
          <TimeSettings />
          <View style={styles().hr}></View>
          <SettingSwitch
            text="Keep Screen Awake"
            value={settings.awake}
            handleChange={() => setSettings({ awake: !settings.awake })}
          />
          <SettingSwitch
            text="Vibrate Phone On End"
            value={settings.vibrate}
            handleChange={() => setSettings({ vibrate: !settings.vibrate })}
          />
          <SettingSwitch
            text="Play Sound On end"
            value={settings.alarm}
            handleChange={() => setSettings({ alarm: !settings.alarm })}
          />
          <View style={styles().hr}></View>
        </ScrollView>
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
      width: "100%",
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
      fontSize: 18,
      color: "white",
      padding: 12,
    },
    hr: {
      borderWidth: 2,
      borderColor: "rgba(255, 255, 255, 0.38)",
      marginTop: 16,
    },
  });

export default Settings;
