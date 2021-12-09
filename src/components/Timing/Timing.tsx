import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

interface Prop {
  onChangeTime: (num: number) => void;
}

const Timing = (props: Prop) => {
  const [active, setActive] = useState(25);

  return (
    <View style={styles.buttonsContainer}>
      <Pressable
        style={[styles.button, active === 25 && styles.active]}
        onPress={() => {
          props.onChangeTime(25);
          setActive(25);
        }}
      >
        <Text style={styles.text}>25 Min</Text>
        <MaterialIcons name="computer" size={24} color="white" />
        <Text style={styles.text}>Pomodoro</Text>
      </Pressable>
      <Pressable
        style={[styles.button, active === 15 && styles.active]}
        onPress={() => {
          props.onChangeTime(15);
          setActive(15);
        }}
      >
        <Text style={styles.text}>15 Min</Text>
        <MaterialCommunityIcons name="sofa" size={24} color="white" />
        <Text style={styles.text}>Long Rest</Text>
      </Pressable>
      <Pressable
        style={[styles.button, active === 5 && styles.active]}
        onPress={() => {
          props.onChangeTime(5);
          setActive(5);
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
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
    marginTop: 44,
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
