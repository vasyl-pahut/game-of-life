// @flow
import type { GameState } from './types';
const ROWS: number = 50;
const COLS: number = 50;

type GetInitialState = (rows?: number, cols?: number) => GameState;
export const getInitialState: GetInitialState = (rows = ROWS, cols = COLS) => {
  return Array.from({ length: rows }).map(() =>
    Array.from({ length: cols }).map(() => Boolean(Math.round(Math.random())))
  );
};

type CellLifeCycle = (cell: boolean, liveNeighbours: number) => boolean;
export const cellLifeCycle: CellLifeCycle = (cell, liveNeighbours) => {
  return cell
    ? liveNeighbours >= 2 && liveNeighbours <= 3
    : liveNeighbours === 3;
};

type GetLiveNeighbours = ({
  rowIndex: number,
  cellIndex: number,
  gameState: GameState,
}) => number;
export const getLiveNeighbours: GetLiveNeighbours = ({
  rowIndex,
  cellIndex,
  gameState,
}) => {
  const neighboursIndexes = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  return neighboursIndexes.reduce((liveNeighbours, [x, y]) => {
    if (gameState[rowIndex + x] && gameState[rowIndex + x][cellIndex + y]) {
      return (liveNeighbours += 1);
    }
    return liveNeighbours;
  }, 0);
};

type WorldTick = (GameState: GameState) => GameState;
export const worldTick: WorldTick = (gameState) => {
  return gameState.map((row, rowIndex) => {
    return row.map((cell, cellIndex) => {
      const liveNeighbours = getLiveNeighbours({
        rowIndex,
        cellIndex,
        gameState,
      });
      return cellLifeCycle(cell, liveNeighbours);
    });
  });
};
