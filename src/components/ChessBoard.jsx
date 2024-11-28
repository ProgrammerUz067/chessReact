// components/ChessBoard.js
import React, { useState } from "react";
import "./ChessBoard.css";
import ChessSquare from "./ChessSquare";

const initialBoard = [
  ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
  ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
  ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
];

const ChessBoard = () => {
  const [board, setBoard] = useState(initialBoard);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);

  const handleSquareClick = (row, col) => {
    if (selectedPiece) {
      const newBoard = board.map((r) => [...r]);
      newBoard[selectedPosition.row][selectedPosition.col] = "";
      newBoard[row][col] = selectedPiece;
      setBoard(newBoard);
      setSelectedPiece(null);
      setSelectedPosition(null);
    } else if (board[row][col]) {
      setSelectedPiece(board[row][col]);
      setSelectedPosition({ row, col });
    }
  };

  return (
    <div className="chessboard">
      {board.map((row, rowIndex) =>
        row.map((piece, colIndex) => (
          <ChessSquare
            key={`${rowIndex}-${colIndex}`}
            row={rowIndex}
            col={colIndex}
            piece={piece}
            isSelected={
              selectedPosition &&
              selectedPosition.row === rowIndex &&
              selectedPosition.col === colIndex
            }
            onClick={handleSquareClick}
          />
        ))
      )}
    </div>
  );
};

export default ChessBoard;
