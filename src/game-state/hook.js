// @flow
import React from 'react';
import { getInitialState, worldTick } from './index';
import { TICK_INTERVAL } from '../constants';

export const useGameOfLife = () => {
  const [gameState, setGameState] = React.useState(getInitialState);

  React.useEffect(() => {
    let timerId = setInterval(() => setGameState(worldTick), TICK_INTERVAL);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return gameState;
};
