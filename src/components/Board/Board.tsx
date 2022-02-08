import { Square } from "../Square";
import type { BoardProps } from "./Board.types";
import "./styles.css";

export const Board = (props: BoardProps) => {
  const { squares, winLocations, onClick } = props;

  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          highlight={winLocations?.includes(index)}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};
