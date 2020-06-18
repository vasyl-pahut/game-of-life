// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from './components/grid';
import { useGameOfLife } from './game-state/hook';
import './style.css';

const App = () => {
  const gameState = useGameOfLife();

  return (
    <div className="container">
      <h1>Game of Life</h1>
      <Grid gameState={gameState} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
