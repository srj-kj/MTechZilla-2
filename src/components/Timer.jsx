/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

function TimerApp() {
  const [time, setTime] = useState({ minutes: 3, seconds: 0 });
  const [isBreak, setIsBreak] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime.seconds === 0) {
            if (prevTime.minutes === 0) {
              clearInterval(interval);
              if (isBreak) {
                setIsBreak(false);
                return { minutes: 3, seconds: 0 };
              } else {
                setIsBreak(true);
                return { minutes: 5, seconds: 0 };
              }
            } else {
              return { minutes: prevTime.minutes - 1, seconds: 59 };
            }
          } else {
            return { ...prevTime, seconds: prevTime.seconds - 1 };
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, isBreak]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setTime({ minutes: 3, seconds: 0 });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-4">
          {isBreak ? "Break Time" : "Work Time"}
        </h1>
        <div className="text-4xl font-bold">
          {String(time.minutes).padStart(2, "0")}:
          {String(time.seconds).padStart(2, "0")}
        </div>
        <div className="mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={toggleTimer}
          >
            {isActive ? "Pause" : "Start"}
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-4"
            onClick={resetTimer}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default TimerApp;
