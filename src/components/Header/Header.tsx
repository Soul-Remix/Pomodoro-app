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
    justifyContent: "center",
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
