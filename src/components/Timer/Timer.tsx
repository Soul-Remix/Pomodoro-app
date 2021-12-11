import React, { useEffect, useMemo, useRef, useState } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { ProgressBar } from "react-native-paper";
import MainButton from "../MainButton/MainButton";

interface Props {
  min: number;
  isPaused: boolean;
  onStart: () => void;
  onEnd: () => void;
}

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60 / 1000);
  const seconds = Math.floor(time / 1000) % 60;

  const formattedMin = minutes < 10 ? "0" + minutes : minutes;
  const formattedSec = seconds < 10 ? "0" + seconds : seconds;
  return formattedMin + ":" + formattedSec;
};

const minToMil = (min: number) => {
  return min * 60 * 1000;
};

const Timer = ({ min, isPaused, onStart, onEnd }: Props) => {
  const [millies, setMillies] = useState(0);
  const interval: { current: NodeJS.Timeout | null } = useRef(null);

  const { width } = useWindowDimensions();

  const minInMill = useMemo(() => minToMil(min), [min]);

  const countDown = () => {
    setMillies((old) => {
      if (old === 0) {
        return 0;
      }
      return old - 1000;
    });
  };

  useEffect(() => {
    setMillies(minToMil(min));
  }, [min]);

  useEffect(() => {
    if (millies === 0) {
      onEnd();
      return;
    }
  }, [millies]);

  useEffect(() => {
    if (!isPaused) {
      return;
    }

    interval.current = setInterval(countDown, 1000);

    return () => {
      clearInterval(interval.current as NodeJS.Timeout);
    };
  }, [isPaused]);

  return (
    <View>
      <ProgressBar progress={1 - millies / minInMill} color="white" />
      <View style={styles(width).container}>
        <Text style={styles(width).timerText}>{formatTime(millies)}</Text>
        <MainButton timerOn={isPaused} onStart={onStart} />
      </View>
    </View>
  );
};

const styles = (width: number) =>
  StyleSheet.create({
    container: {
      width: "90%",
      maxWidth: 500,
      minHeight: 300,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 50,
      paddingTop: 20,
      paddingBottom: 30,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderRadius: 20,
      justifyContent: "space-around",
    },
    timerText: {
      color: "white",
      fontSize: width < 300 ? 80 : width < 500 ? 100 : 120,
      fontWeight: "bold",
      textAlign: "center",
    },
  });

export default Timer;
