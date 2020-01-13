import React, { useContext } from "react";
import Spinner from "../layout/Spinner";
import Score from "./Score";
import Card from "./Card";

import CardContext from "../../context/cardContext";

const GameBoard = () => {
  const cardContext = useContext(CardContext);
  const {
    images,
    boardToggled,
    grid,
    flippedCards,
    checkIfMatch,
    loading
  } = cardContext;

  if (loading) return <Spinner />;

  if (boardToggled) {
    if (flippedCards.length === 2) {
      checkIfMatch();
    }

    return (
      <div className="game-board-wrapper">
        <Score />
        <div
          className="game-board"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${grid},1fr)`,
            gap: "0.1rem"
          }}
        >
          {images.map((card, index) => (
            <Card key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    );
  } else return null;
};

export default GameBoard;
