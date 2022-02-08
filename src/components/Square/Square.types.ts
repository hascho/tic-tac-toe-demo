import { MouseEventHandler } from "react";

export type SquareProps = {
  value: string;

  /**
   * @default false
   */
  highlight?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
