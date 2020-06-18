// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import { Grid } from './components/grid';

const App = () => {
  return (
    <div className="container">
      <h1>Game of Life</h1>
      <Grid rows={50} cols={50} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
