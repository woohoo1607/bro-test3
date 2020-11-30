import React from 'react';
import Line from "./Line";

const Table = ({data, cellSize}) => {
  return (
    <>
      <table className='table'>
        <tbody>
        {data.map((line, i) => <Line line={line} cellSize={cellSize} key={i} />)}
        </tbody>
      </table>
    </>
  );
};

export default Table;
