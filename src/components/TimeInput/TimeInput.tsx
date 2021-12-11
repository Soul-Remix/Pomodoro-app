import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

interface Props {
  text: string;
  time: number;
  type: "pomodoro" | "long" | "short";
  handleChange: (val: string, type: "pomodoro" | "long" | "short") => void;
  handleBlur: (type: "pomodoro" | "long" | "short") => void;
}

const TimeInput = ({ text, type, time, handleChange, handleBlur }: Props) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputText}>{text}</Text>
      <TextInput
        value={`${time}`}
        onChangeText={(val) => {
          handleChange(val, type);
        }}
        onBlur={() => handleBlur(type)}
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 0.3,
  },
  input: {
    textAlign: "center",
  },
  inputText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 6,
  },
});

export default TimeInput;
