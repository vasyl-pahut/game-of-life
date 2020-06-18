// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import { Grid } from './components/grid';
import { getInitialState } from './game-state';

const App = () => {
  const gameState = getInitialState();
  return (
    <div className="container">
      <h1>Game of Life</h1>
      <Grid gameState={gameState} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
