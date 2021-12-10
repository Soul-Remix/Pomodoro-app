import React from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import useStore from "../../store/store";

interface Props extends PressableProps {
  timerOn: boolean;
  onStart: () => void;
}

const MainButton = (props: Props) => {
  const background = useStore((state) => state.background);

  return (
    <Pressable
      style={[styles().button, props.timerOn && styles().buttonActive]}
      onPress={props.onStart}
    >
      <Text style={styles(background).text}>
        {!props.timerOn ? "Start" : "Pause"}
      </Text>
    </Pressable>
  );
};

const styles = (bg?: string) =>
  StyleSheet.create({
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
      color: bg,
      textTransform: "uppercase",
    },
  });

export default MainButton;
