import "./styles.css";
import { useRef, useState } from "react";

export default function App() {
  const [timer, setTimer] = useState(0);
  const ref = useRef();
  const [isTimerRuning, setTimerRuning] = useState(false);

  const startTimer = () => {
    setTimerRuning(true);
    clearInterval(ref.current);
    ref.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    setTimerRuning(false);
    clearInterval(ref.current);
  };

  const onButtonClick = () => {
    if (isTimerRuning) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  const hours = Math.trunc(timer / (60 * 60));
  const minutes = Math.trunc((timer / 60) % 60);
  const seconds = timer % 60;

  return (
    <div className="App">
      <div className="top-right-text">Developed by Amay Sandanshiv</div>
      <div className="flex-container">
        <div>Stopwatch</div>
        <div className="timer-container">
          <span>{String(hours).padStart(2, "0")}</span> :
          <span>{String(minutes).padStart(2, "0")}</span> :
          <span>{String(seconds).padStart(2, "0")}</span>
        </div>
        <div className="button-container">
          <button onClick={onButtonClick}>
            {isTimerRuning ? "Stop" : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
}
