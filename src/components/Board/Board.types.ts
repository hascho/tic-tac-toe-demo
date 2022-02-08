export type BoardProps = {
  squares: string[];
  winLocations?: number[];
  onClick: (squareIndex: number) => void;
};
