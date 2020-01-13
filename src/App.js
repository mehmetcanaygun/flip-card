import React from "react";
import Navbar from "./components/layout/Navbar";
import GameStart from "./components/card/GameStart";
import GameBoard from "./components/card/GameBoard";
import GameOver from "./components/card/GameOver";

import CardState from "./context/CardState";

import "./css/App.css";

function App() {
  return (
    <CardState>
      <div className="App">
        <Navbar />
        <div className="container">
          <GameStart />
          <GameBoard />
          <GameOver />
        </div>
      </div>
    </CardState>
  );
}

export default App;
