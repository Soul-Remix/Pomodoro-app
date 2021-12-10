import React, { useEffect, useState } from "react";
import { activateKeepAwake, deactivateKeepAwake } from "expo-keep-awake";
import { Audio } from "expo-av";

import Timer from "../../components/Timer/Timer";
import Timing from "../../components/Timing/Timing";

const MainScreen = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [minutes, setMinutes] = useState(0.1);
  const [sound, setSound]: any = useState();

  const onStart = () => {
    setIsStarted(!isStarted);
    playSound();
  };

  const onEnd = () => {
    setIsStarted(false);
  };

  const changeTime = (val: number) => {
    setMinutes(val);
    setIsStarted(false);
  };

  useEffect(() => {
    if (isStarted) {
      activateKeepAwake();
    } else {
      deactivateKeepAwake();
    }
  }, [isStarted]);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/sounds/Button.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

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
