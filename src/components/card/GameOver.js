import React, { useContext } from "react";
import CardContext from "../../context/cardContext";

const GameOver = () => {
  const cardContext = useContext(CardContext);
  const {
    match,
    move,
    userTime,
    resetGame,
    toggleStart,
    toggleOver,
    grid
  } = cardContext;

  if (cardContext.overToggled) {
    return (
      <div className="game-over box-shadow">
        <div className="info">
          <p
            className="match"
            style={
              match === Math.pow(grid, 2) / 2
                ? {
                    backgroundImage:
                      "linear-gradient(to bottom right, #4e862e, #396321)"
                  }
                : {
                    backgroundImage:
                      "linear-gradient(to bottom right, #862e2e, #642222)"
                  }
            }
          >
            {match} matches
          </p>
          <p className="move">{move} moves</p>
          <p className="user-time">in {userTime} seconds</p>
        </div>
        <button
          className="again-btn"
          onClick={() => {
            resetGame();
            toggleStart();
            toggleOver();
          }}
        >
          Play Again
        </button>
      </div>
    );
  } else return null;
};

export default GameOver;
