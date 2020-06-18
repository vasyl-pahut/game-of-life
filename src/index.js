// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from './components/grid';
import { getInitialState, worldTick } from './game-state';
import { TICK_INTERVAL } from './constants';
import './style.css';

const App = () => {
  const [gameState, setGameState] = React.useState(getInitialState());

  React.useEffect(() => {
    let timerId = setInterval(() => setGameState(worldTick), TICK_INTERVAL);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="container">
      <h1>Game of Life</h1>
      <Grid gameState={gameState} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
