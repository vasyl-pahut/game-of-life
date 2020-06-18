import {
  getInitialState,
  cellLifeCycle,
  getLiveNeighbours,
  worldTick,
} from './index';

describe('Get initial state', () => {
  test('Should return correct size', () => {
    const rows = 50;
    const cols = 50;
    const initialState = getInitialState(rows, cols);
    expect(initialState).toHaveLength(rows);
    initialState.forEach((row) => {
      expect(row).toHaveLength(cols);
    });
  });

  test('Should be filled with booleans', () => {
    const rows = 50;
    const cols = 50;
    const initialState = getInitialState(rows, cols);
    initialState.forEach((row) =>
      row.forEach((cell) => expect(typeof cell).toBe('boolean'))
    );
  });
});

describe('Cell life cycle', () => {
  test('Underpopulation. Dies if has < 2 live neighbours', () => {
    expect(cellLifeCycle(true, 1)).toBe(false);
  });

  test('Survive. Lives if has 2 or 3 live neighbours', () => {
    expect(cellLifeCycle(true, 2)).toBe(true);
    expect(cellLifeCycle(true, 3)).toBe(true);
  });

  test('Overcrowding. Dies if has > 3 live neighbours', () => {
    expect(cellLifeCycle(true, 4)).toBe(false);
  });

  test('Reproduction. Dead cell become alive if 3 live neighbours', () => {
    expect(cellLifeCycle(false, 3)).toBe(true);
  });
});

describe('Correct count live neighbours', () => {
  test('Count for each cell in the world', () => {
    const gameState = [
      [true, false, false],
      [false, false, true],
      [false, true, false],
    ];
    const expectedLiveNeighbours = [
      [0, 2, 1],
      [2, 3, 1],
      [1, 1, 2],
    ];
    gameState.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        const liveNeighbours = getLiveNeighbours({
          rowIndex,
          cellIndex,
          gameState,
        });
        expect(liveNeighbours).toEqual(
          expectedLiveNeighbours[rowIndex][cellIndex]
        );
      });
    });
  });
});

// Check for common life patterns from https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Examples_of_patterns
describe('World tick. Check for common life patterns', () => {
  test('Check Block', () => {
    const gameState = [
      [false, false, false, false],
      [false, true, true, false],
      [false, true, true, false],
      [false, false, false, false],
    ];
    const expectedGameState = [
      [false, false, false, false],
      [false, true, true, false],
      [false, true, true, false],
      [false, false, false, false],
    ];
    expect(worldTick(gameState)).toEqual(expectedGameState);
  });
  test('Check Blinker', () => {
    const gameStatePeriod0 = [
      [false, false, false, false, false],
      [false, false, true, false, false],
      [false, false, true, false, false],
      [false, false, true, false, false],
      [false, false, false, false, false],
    ];
    const gameStatePeriod1 = [
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, true, true, true, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
    ];
    const tick1 = worldTick(gameStatePeriod0);
    expect(tick1).toEqual(gameStatePeriod1);
    const tick2 = worldTick(tick1);
    expect(tick2).toEqual(gameStatePeriod0);
  });
});
