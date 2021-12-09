import React from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

interface Props extends PressableProps {
  timerOn: boolean;
  onStart: () => void;
}

const MainButton = (props: Props) => {
  return (
    <Pressable
      style={[styles.button, props.timerOn && styles.buttonActive]}
      onPress={props.onStart}
    >
      <Text style={styles.text}>{!props.timerOn ? "Start" : "Pause"}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    padding: 12,
    width: "70%",
    maxWidth: 180,
    marginRight: "auto",
    marginLeft: "auto",
    borderRadius: 3,
    shadowColor: "rgb(235, 235, 235)",
    shadowOffset: { height: 8, width: 0 },
  },
  buttonActive: {
    transform: [{ translateY: 6 }],
    shadowOffset: { height: 0, width: 0 },
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "rgb(217, 85, 80)",
    textTransform: "uppercase",
  },
});

export default MainButton;
