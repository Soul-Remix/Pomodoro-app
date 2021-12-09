import React, { useEffect, useState } from "react";
import { activateKeepAwake, deactivateKeepAwake } from "expo-keep-awake";

import Timer from "../../components/Timer/Timer";
import Timing from "../../components/Timing/Timing";

const MainScreen = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [minutes, setMinutes] = useState(0.1);

  const onStart = () => {
    setIsStarted(!isStarted);
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
