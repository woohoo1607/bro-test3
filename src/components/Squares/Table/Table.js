import React from "react";

import Line from "./Line";

const Table = ({ data, cellSize, setLineIndex, setCellIndex }) => {
  return (
    <table className="table">
      <tbody>
        {data.map((line, i) => (
          <Line
            line={line}
            countLine={data.length}
            cellSize={cellSize}
            setCellIndex={setCellIndex}
            setLineIndex={setLineIndex}
            lineNumber={i}
            key={i}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
