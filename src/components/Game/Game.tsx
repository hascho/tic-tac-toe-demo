import { useState } from "react";
import { Board } from "../Board";
import type { GameState } from "./Game.types";
import { calculateWinner } from "./calculateWinner";

import "./styles.css";

const initialGameState: GameState = {
  xIsNext: true,
  board: Array(9).fill("")
};

export const Game = () => {
  const [state, setState] = useState<GameState>(initialGameState);
  const { winner, winLocations } = calculateWinner(state.board);

  const handleClickSquare = (squareIndex: number) => {
    const { xIsNext, board } = state;

    if (winner || board[squareIndex]) {
      return;
    }

    const newBoard = board.map((square, index) => {
      if (index === squareIndex) {
        return xIsNext ? "x" : "o";
      }

      return square;
    });

    setState({ xIsNext: !xIsNext, board: newBoard });
  };

  return (
    <div className="game">
      <div style={{ height: "50px" }}>
        {winner ? <p>winner: {winner}</p> : null}
      </div>
      <Board
        squares={state.board}
        winLocations={winLocations}
        onClick={handleClickSquare}
      />
    </div>
  );
};
