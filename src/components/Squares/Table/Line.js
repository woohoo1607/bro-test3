import React from "react";
import Cell from "./Cell";

const Line = ({
  line,
  cellSize,
  lineNumber,
  setLineIndex,
  setCellIndex,
  countLine,
}) => {
  return (
    <tr className="line">
      {line.map((cell, i) => (
        <Cell
          cellSize={cellSize}
          countLine={countLine}
          countCell={line.length}
          cellNumber={i}
          lineNumber={lineNumber}
          setLineIndex={setLineIndex}
          setCellIndex={setCellIndex}
          key={i}
        />
      ))}
    </tr>
  );
};

export default Line;
