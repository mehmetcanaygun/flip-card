import React, { useContext } from "react";
import CardContext from "../../context/cardContext";

const Card = ({ card: { cardId, cardPath }, index }) => {
  const cardContext = useContext(CardContext);
  const { flipCard, flippedCards, matchedCards } = cardContext;

  return (
    <button
      className={flippedCards.includes(index) ? "card flipped" : "card"}
      style={
        matchedCards.includes(cardId)
          ? {
              animation: "disappear 0.2s ease-in-out forwards"
            }
          : { animation: "none" }
      }
      onClick={() => {
        flipCard(index, cardId);
      }}
    >
      <i className={cardPath}></i>
    </button>
  );
};

export default Card;
