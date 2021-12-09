import React, { useState } from "react";

import Timer from "../../components/Timer/Timer";

const MainScreen = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [minutes, setMinutes] = useState(0.1);

  const onStart = () => {
    setIsStarted(!isStarted);
  };

  const onEnd = () => {
    setIsStarted(false);
  };

  return (
    <Timer min={minutes} isPaused={isStarted} onStart={onStart} onEnd={onEnd} />
  );
};

export default MainScreen;
