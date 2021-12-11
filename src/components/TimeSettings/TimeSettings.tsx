import React from "react";
import { StyleSheet, View } from "react-native";
import useStore from "../../store/store";
import TimeInput from "../TimeInput/TimeInput";

const TimeSettings = () => {
  const times = useStore((state) => state.times);
  const setTimes = useStore((state) => state.setTimes);

  const handleChange = (val: string, type: "pomodoro" | "long" | "short") => {
    const numVal = +val;
    const timesObj = times;
    timesObj[type] = numVal;
    setTimes(timesObj);
  };

  const handleBlur = (type: "pomodoro" | "long" | "short") => {
    const timesObj = times;
    if (timesObj[type] <= 0) {
      timesObj[type] = 1;
      setTimes(timesObj);
    }
  };

  return (
    <View style={styles.timeContainer}>
      <TimeInput
        text="Pomodoro"
        type="pomodoro"
        time={times.pomodoro}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <TimeInput
        text="Long Break"
        type="long"
        time={times.long}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <TimeInput
        text="Short Rest"
        type="short"
        time={times.short}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
  },
});

export default TimeSettings;
