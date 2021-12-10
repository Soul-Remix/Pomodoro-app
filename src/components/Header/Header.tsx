import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { IconButton } from "react-native-paper";

interface Props {
  openSettings: () => void;
}

const Header = ({ openSettings }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Pomodoro</Text>
      <IconButton icon="cog" size={24} color="white" onPress={openSettings} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 18,
    paddingTop: 40,
  },
  logo: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default Header;
