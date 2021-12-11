import React, { useEffect, useState } from "react";
import { activateKeepAwake, deactivateKeepAwake } from "expo-keep-awake";
import { Audio } from "expo-av";

import Timer from "../../components/Timer/Timer";
import Timing from "../../components/Timing/Timing";
import { Vibration } from "react-native";
import useStore from "../../store/store";

const MainScreen = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [minutes, setMinutes] = useState(0.1);
  const [buttonSound, setButtonSound]: any = useState();
  const [alarmSound, setAlarmSound]: any = useState();

  const times = useStore((state) => state.times);
  const settings = useStore((state) => state.settings);

  const onStart = async () => {
    setIsStarted(!isStarted);
    playButtonSound();
    Vibration.cancel();
    if (alarmSound) {
      await alarmSound.stopAsync();
    }
  };

  const onEnd = () => {
    setIsStarted(false);
    if (settings.vibrate) {
      Vibration.vibrate([400, 400, 400, 400], true);
      setTimeout(() => Vibration.cancel(), 5000);
    }
    if (settings.alarm) {
      playAlarmSound();
    }
    setMinutes(times.short);
  };

  const changeTime = (val: number) => {
    setMinutes(val);
    setIsStarted(false);
  };

  useEffect(() => {
    if (isStarted && settings.awake) {
      activateKeepAwake();
    } else {
      deactivateKeepAwake();
    }
  }, [isStarted]);

  const playButtonSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/sounds/Button.mp3")
    );
    setButtonSound(sound);
    await sound.playAsync();
  };

  const playAlarmSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/sounds/Alarm.mp3")
    );
    setAlarmSound(sound);
    await sound.playAsync();
  };

  useEffect(() => {
    return buttonSound
      ? () => {
          buttonSound.unloadAsync();
        }
      : undefined;
  }, [buttonSound]);

  useEffect(() => {
    return alarmSound
      ? () => {
          alarmSound.unloadAsync();
        }
      : undefined;
  }, [alarmSound]);

  return (
    <>
      <Timer
        min={minutes}
        isPaused={isStarted}
        onStart={onStart}
        onEnd={onEnd}
      />
      <Timing onChangeTime={changeTime} />
    </>
  );
};

export default MainScreen;
