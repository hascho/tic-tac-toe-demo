import type { SquareProps } from "./Square.types";
import "./styles.css";

const styles = (highlight: boolean) => {
  if (!highlight) {
    return undefined;
  }
  return {
    border: "5px solid green"
  };
};

export const Square = (props: SquareProps) => {
  const { value, highlight = false, onClick } = props;

  return (
    <button
      className="square"
      style={styles(highlight)}
      type="button"
      onClick={onClick}
    >
      {value}
    </button>
  );
};
