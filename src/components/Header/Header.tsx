import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Pomodoro</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
  },
  logo: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default Header;
