import React, { useState, useEffect } from "react";

const CountdownTimer = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId); // Cleanup interval on unmount
  }, [timeLeft, onTimeUp]);

  // Format time in MM:SS format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col h-[40px] mt-5 w-[20%] mx-auto items-center rounded-md p-[1em] ">
      <h2 className="flex font-extrabold text-[40px]"> {formatTime(timeLeft)}</h2>
    </div>
  );
};

export default CountdownTimer;