// @flow
const ROWS: number = 20;
const COLS: number = 20;
type GameState = Array<Array<boolean>>;

type GetInitialState = ({
  rows: number,
  cols: number,
}) => GameState;

export const getInitialState: GetInitialState = ({
  rows = ROWS,
  cols = COLS,
}) => {
  return Array(rows)
    .fill()
    .map(() =>
      Array(cols)
        .fill()
        .map(() => Boolean(Math.round(Math.random())))
    );
};

type CellLifeCycle = (boolean, number) => boolean;

export const cellLifeCycle: CellLifeCycle = (cell, liveNeighbours) => {
  return cell
    ? liveNeighbours >= 2 && liveNeighbours <= 3
    : liveNeighbours === 3;
};
