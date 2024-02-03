import React, { useRef, useState } from 'react';
import './style.css';

export default function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  let timeInterval = useRef(null);

  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(true);
    timeInterval.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1);
  };

  const handlePause = () => {
    if (!isRunning) return;
    setIsRunning(false);
    clearInterval(timeInterval.current);
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(timeInterval.current);
    setTimer(0);
  };

  const formatTime = (timer) => {
    const seconds = Math.floor(timer / 1000)
      .toString()
      .padStart(2, '0');
    const minutes = parseInt(Math.floor(seconds / 60) % 60)
      .toString()
      .padStart(2, '0');
    const hours = parseInt(Math.floor(minutes / 60) % 24)
      .toString()
      .padStart(2, '0');
    const milliseconds = (timer % 1000).toString().padStart(3, '0');

    return { hours, minutes, seconds, milliseconds };
  };

  const { hours, minutes, seconds, milliseconds } = formatTime(timer);

  return (
    <div className="App">
      <h1>Reactjs Stopwatch</h1>
      <div className="timer-container">
        <div className="timer-box">
          <h1>{hours}</h1>
        </div>
        <span className="colon">:</span>
        <div className="timer-box">
          <h1>{minutes}</h1>
        </div>
        <span className="colon">:</span>
        <div className="timer-box">
          <h1>{seconds}</h1>
        </div>
        <span className="colon">:</span>
        <div className="timer-box">
          <h1>{milliseconds}</h1>
        </div>
      </div>
      <div className="button-container">
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
