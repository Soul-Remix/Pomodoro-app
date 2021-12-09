import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MainButton from "../MainButton/MainButton";

interface Props {
  min: number;
  isPaused: boolean;
  onStart: () => void;
  onEnd: () => void;
}

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60 / 1000) % 60;
  const seconds = Math.floor(time / 1000) % 60;

  const formattedMin = minutes < 10 ? "0" + minutes : minutes;
  const formattedSec = seconds < 10 ? "0" + seconds : seconds;
  return formattedMin + ":" + formattedSec;
};

const Timer = ({ min, isPaused, onStart, onEnd }: Props) => {
  const [millies, setMillies] = useState(min * 60 * 1000);
  const interval: { current: NodeJS.Timeout | null } = useRef(null);

  const countDown = () => {
    setMillies((old) => {
      if (old === 0) {
        return 0;
      }
      return old - 1000;
    });
  };

  useEffect(() => {
    if (!isPaused) {
      return;
    }

    if (millies === 0) {
      onEnd();
      return;
    }

    interval.current = setInterval(countDown, 1000);

    return () => {
      clearInterval(interval.current as NodeJS.Timeout);
    };
  }, [isPaused, millies]);

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(millies)}</Text>
      <MainButton timerOn={isPaused} onStart={onStart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    width: "90%",
    maxWidth: 500,
    maxHeight: 400,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
    justifyContent: "space-around",
  },
  timerText: {
    color: "white",
    fontSize: 100,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Timer;
