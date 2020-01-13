import React, { useContext, useEffect, useState } from "react";
import CardContext from "../../context/cardContext";

const Score = () => {
  const cardContext = useContext(CardContext);
  const {
    move,
    match,
    grid,
    setUserTime,
    toggleBoard,
    toggleOver
  } = cardContext;
  const [time, setTime] = useState(0);
  let sec = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (grid === 4) {
        sec += 100 / 40;
      } else if (grid === 6) {
        sec += 100 / 120;
      } else if (grid === 8) {
        sec += 100 / 240;
      }

      setTime(sec);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (time >= 100) {
    toggleBoard(false);
    toggleOver();
    if (grid === 4) {
      setUserTime((time * 4) / 10);
      console.log((time * 4) / 10);
    } else if (grid === 6) {
      setUserTime((time * 6) / 10);
      console.log((time * 6) / 10);
    } else if (grid === 8) {
      setUserTime((time * 8) / 10);
      console.log((time * 8) / 10);
    }
  }

  if (match === Math.pow(grid, 2) / 2) {
    toggleBoard(false);
    toggleOver();
    if (grid === 4) {
      setUserTime((time * 4) / 10);
      console.log((time * 4) / 10);
    } else if (grid === 6) {
      setUserTime((time * 6) / 10);
      console.log((time * 6) / 10);
    } else if (grid === 8) {
      setUserTime((time * 8) / 10);
      console.log((time * 8) / 10);
    }
  }

  return (
    <div className="score-box">
      <div className="time-bar">
        <div style={{ width: `${time}%` }}></div>
      </div>
      <div className="move-match">
        <p>
          Move: <span>{move}</span>
        </p>
        <p>
          Match: <span>{match}</span>
        </p>
      </div>
    </div>
  );
};

export default Score;
