// components/ChessSquare.js
import React from "react";
import "./ChessSquare.css";

const ChessSquare = ({ row, col, piece, isSelected, onClick }) => {
  const isDark = (row + col) % 2 === 1;

  return (
    <div
      className={`square ${isDark ? "dark" : "light"} ${
        isSelected ? "selected" : ""
      }`}
      onClick={() => onClick(row, col)}
    >
      <span className="piece">{piece}</span>
    </div>
  );
};

export default ChessSquare;
