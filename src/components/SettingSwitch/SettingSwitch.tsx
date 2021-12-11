import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Switch } from "react-native-paper";

interface Props {
  text: string;
  value: boolean;
  handleChange: () => void;
}

const SettingSwitch = ({ text, value, handleChange }: Props) => {
  return (
    <View style={styles.settingContainer}>
      <Text style={styles.text}>{text}</Text>
      <Switch value={value} onValueChange={handleChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  settingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
    width: "90%",
    maxWidth: 350,
    marginRight: "auto",
    marginLeft: "auto",
  },
  text: {
    fontSize: 18,
    color: "white",
    padding: 12,
  },
});

export default SettingSwitch;
