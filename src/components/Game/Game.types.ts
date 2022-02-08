export type GameState = {
  xIsNext: boolean;
  board: Array<"x" | "o" | "">;
};

export type Shape = GameState["board"][number];
