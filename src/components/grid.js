// @flow
import React from 'react';
import './style.css';

type Props = {
  rows: number,
  cols: number,
};

export const Grid = (props: Props) => {
  const { rows, cols } = props;
  return (
    <div className="grid">
      {Array.from({ length: rows }).map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {Array.from({ length: cols }).map((cell, cellIndex) => (
            <div className="cell" key={cellIndex}></div>
          ))}
        </div>
      ))}
    </div>
  );
};
