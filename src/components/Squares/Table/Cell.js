import React from "react";

const Cell = ({
  cellSize,
  lineNumber,
  cellNumber,
  setLineIndex,
  setCellIndex,
  countLine,
  countCell,
}) => {
  const whereMouse = () => {
    countLine > 1 ? setLineIndex(lineNumber) : setLineIndex(null);
    countCell > 1 ? setCellIndex(cellNumber) : setCellIndex(null);
  };

  return (
    <td
      className="item"
      style={{ height: `${cellSize}px`, width: `${cellSize}px` }}
      onMouseEnter={whereMouse}
    ></td>
  );
};

export default Cell;
