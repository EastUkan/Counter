import { useState } from "react";
import s from "./Counter.module.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((state) => state + 1);
  };

  const handleDecrement = () => {
    setCounter((state) => state - 1);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.countDisplay}>{counter}</div>
      <div className={s.actions}>
        <button className={s.button} type="button" onClick={handleIncrement}>
          Increment
        </button>
        <button
          disabled={counter === 0}
          className={s.button}
          type="button"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
