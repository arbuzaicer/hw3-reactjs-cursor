import React, { useEffect, useState } from "react";
import TimeSlider from "../TimeSlider/TimeSlider";

const Timer = ({
  time,
  timerName,
  step,
  autoStart,
  isInfinite,
  onTimeStart,
  onTick,
  onTimeEnd,
  onTimePaused,
  placeholder,
}) => {
  let [currentTime, setCurrentTime] = useState(time);
  const [timerActive, setTimerActive] = useState(false);
  const [displayMaxTime, setDisplayMaxTime] = useState(time);

  useEffect(() => {
    autoStart && setTimerActive(true);

    if (timerActive) {
      const timeId = setInterval(() => {
        setCurrentTime((currentTime) => --currentTime);
        onTick(--currentTime);

        if (currentTime <= 0) {
          if (isInfinite) {
            setCurrentTime(displayMaxTime);
          } else {
            clearInterval(timeId);
            onTimeEnd();
            setCurrentTime(displayMaxTime);
            setTimerActive(false);
          }
        }
      }, step * 1000);

      return () => clearInterval(timeId);
    }
  }, [timerActive, currentTime]);

  return (
    <>
      <h2 className="timer-title">{timerName}</h2>
      <div className="input-section">
        <p>Введите время таймера</p>
        <input
          className="input-time"
          type="number"
          placeholder={placeholder}
          min={1}
          onChange={(event) => {
            setCurrentTime(Number(event.target.value));
            setDisplayMaxTime(Number(event.target.value));
          }}
        />
      </div>
      <button
        className={`btn ${timerActive ? "disable" : "active"}`}
        disabled={timerActive}
        onClick={() => {
          onTimeStart();
          setTimerActive(true);
        }}
      >
        Start
      </button>
      <button
        className={`btn ${!timerActive ? "disable" : "active"}`}
        disabled={!timerActive}
        onClick={() => {
          onTimePaused();
          setTimerActive(false);
        }}
      >
        Pause
      </button>
      <TimeSlider min={0} max={displayMaxTime} value={currentTime} />
      <h2 className="time-left">Осталось времени: {currentTime}</h2>
      <div className="timer-info">
        <p>Timer info:</p>
        <ul>
          <li>Timer start with: {displayMaxTime} seconds</li>
          <li>Timer step: {step} seconds</li>
          <li>Activated auto-start: {autoStart ? "Yes" : "No"}</li>
          <li>Activated infinite: {isInfinite ? "Yes" : "No"}</li>
        </ul>
      </div>
    </>
  );
};

export default Timer;
