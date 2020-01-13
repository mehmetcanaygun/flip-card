import React, { useContext } from "react";
import CardContext from "../../context/cardContext";

const Navbar = () => {
  const cardContext = useContext(CardContext);
  const { resetGame, boardToggled, toggleBoard, toggleStart } = cardContext;

  return (
    <div className="navbar">
      {boardToggled && (
        <button
          className="back-btn"
          onClick={() => {
            resetGame();
            toggleBoard();
            toggleStart();
          }}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
      )}
      <div className="navbar__title">
        <p className="text-shadow">FlipCard</p>
        <a
          href="https://www.github.com/mehmetcanaygun"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Mehmet Can Aygün
        </a>
      </div>
    </div>
  );
};

export default Navbar;
