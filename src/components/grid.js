// @flow
import React from 'react';
import type { GameState } from '../game-state/types';
import './style.css';

type Props = {
  gameState: GameState,
};

export const Grid = (props: Props) => {
  const { gameState } = props;
  return (
    <div className="grid">
      {gameState.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <div
              className={`cell${cell ? ' alive' : ''}`}
              key={cellIndex}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};
