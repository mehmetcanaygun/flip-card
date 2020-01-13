import React, { useContext } from "react";

import CardContext from "../../context/cardContext";

const GameStart = () => {
  const cardContext = useContext(CardContext);
  const { getImages, startToggled, toggleStart } = cardContext;

  if (startToggled) {
    return (
      <div className="game-start">
        <p className="title">Choose a difficulty to start...</p>
        <div>
          <button
            className="game-start__button"
            onClick={() => {
              getImages(4);
              toggleStart();
            }}
          >
            Easy
          </button>
          <button
            className="game-start__button"
            onClick={() => {
              getImages(6);
              toggleStart();
            }}
          >
            Medium
          </button>
          <button
            className="game-start__button"
            onClick={() => {
              getImages(8);
              toggleStart();
            }}
          >
            Hard
          </button>
        </div>
      </div>
    );
  } else return null;
};

export default GameStart;
