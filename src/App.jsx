import React from "react";
import ChessBoard from "./components/Chessboard";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>React Chess Game</h1>
      <ChessBoard />
    </div>
  );
};

export default App;
