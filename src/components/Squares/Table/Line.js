import React from 'react';
import Cell from "./Cell";

const Line = ({line, cellSize}) => {
  return (
    <tr className='line'>
      {line.map((cell, i) => <Cell cellSize={cellSize} key={i}/>)}
    </tr>
  );
};

export default Line;
