import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import useStore from "../../store/store";

interface Prop {
  onChangeTime: (num: number) => void;
}

const Timing = (props: Prop) => {
  const [active, setActive] = useState(1);

  const setBg = useStore((state) => state.setBg);

  return (
    <View style={styles.buttonsContainer}>
      <Pressable
        style={[styles.button, active === 1 && styles.active]}
        onPress={() => {
          props.onChangeTime(25);
          setActive(1);
          setBg("rgb(217, 85, 80)");
        }}
      >
        <Text style={styles.text}>25 Min</Text>
        <MaterialIcons name="computer" size={24} color="white" />
        <Text style={styles.text}>Pomodoro</Text>
      </Pressable>
      <Pressable
        style={[styles.button, active === 2 && styles.active]}
        onPress={() => {
          props.onChangeTime(15);
          setActive(2);
          setBg("rgb(76, 145, 149)");
        }}
      >
        <Text style={styles.text}>15 Min</Text>
        <MaterialCommunityIcons name="sofa" size={24} color="white" />
        <Text style={styles.text}>Long Rest</Text>
      </Pressable>
      <Pressable
        style={[styles.button, active === 3 && styles.active]}
        onPress={() => {
          props.onChangeTime(5);
          setActive(3);
          setBg("rgb(69, 124, 163)");
        }}
      >
        <Text style={styles.text}>5 Min</Text>
        <SimpleLineIcons name="cup" size={24} color="white" />
        <Text style={styles.text}>Short Rest</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 0.3,
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
    maxWidth: 450,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
    marginTop: 44,
    marginHorizontal: "auto",
  },
  button: {
    alignItems: "center",
    opacity: 0.6,
  },
  active: { opacity: 1 },
  text: {
    color: "white",
    fontSize: 16,
  },
});

export default Timing;
