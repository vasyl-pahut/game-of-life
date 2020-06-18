import { getInitialState } from './index';

describe('Get initial state', () => {
  test('Should return correct size', () => {
    const rows = 50;
    const cols = 50;
    const initialState = getInitialState({ rows, cols });
    expect(initialState).toHaveLength(rows);
    initialState.forEach((row) => {
      expect(row).toHaveLength(cols);
    });
  });

  test('Should be filled with booleans', () => {
    const rows = 50;
    const cols = 50;
    const initialState = getInitialState({ rows, cols });
    initialState.forEach((row) => row.forEach((cell) => expect(typeof cell).toBe('boolean')));
  });
});
