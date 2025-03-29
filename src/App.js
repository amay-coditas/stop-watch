import "./styles.css";
import { useRef, useState } from "react";

export default function App() {
  const [timer, setTimer] = useState(0);
  const ref = useRef();
  const [timeStatus, setTimeStatus] = useState("stop");

  const onStartClick = () => {
    setTimeStatus("start");
    clearInterval(ref.current);
    ref.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  const onStop = () => {
    setTimeStatus("stop");
    clearInterval(ref.current);
  };

  const hours = Math.trunc(timer / (60 * 60));
  const minutes = Math.trunc((timer / 60) % 60);
  const seconds = timer % 60;

  return (
    <div className="App">
      <div className="top-right-text">
        Created and Hosted by Amay Sandanshiv
      </div>
      <div>Stop watch {timeStatus}</div>
      <div className="timer-container">
        <span>{String(hours).padStart(2, "0")}</span> :
        <span>{String(minutes).padStart(2, "0")}</span> :
        <span>{String(seconds).padStart(2, "0")}</span>
      </div>
      <div className="button-container">
        <button onClick={onStartClick}>Start</button>
        <button onClick={onStop}>Stop</button>
      </div>
    </div>
  );
}
