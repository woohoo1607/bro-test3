import React from 'react';

const Cell = ({cellSize}) => {
  return (
    <td className='item' style={{height: `${cellSize}px`, width: `${cellSize}px`}}></td>
  )
};

export default Cell;
