import React, { useState } from "react";

import Table from "./Table/Table";
import Button from "./Button";
import "./styles.css";

const Squares = ({ initialWidth, initialHeight, cellSize, parentId }) => {
  initialWidth = initialWidth || 4;
  initialHeight = initialHeight || 4;
  cellSize = cellSize || 50;

  const [deleteLineBtnIndex, setDeleteLineBtnIndex] = useState(null);
  const [deleteCellBtnIndex, setDeleteCellBtnIndex] = useState(null);
  const [data, setData] = useState([]);

  if (!data.length) {
    const data = [];
    for (let i = 0; i < initialHeight; i++) {
      const line = [];
      for (let j = 0; j < initialWidth; j++) {
        line.push("");
      }
      data.push(line);
    }
    setData(data);
  }

  const hideDeleteButtons = () => {
    setDeleteLineBtnIndex(null);
    setDeleteCellBtnIndex(null);
  };

  const deleteLine = (index) => () => {
    if (data.length < 2) {
      return;
    }
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    hideDeleteButtons();
  };

  const deleteColumn = (index) => () => {
    if (data[0].length < 2) {
      return;
    }
    const newData = data.map((line) => {
      const newLine = [...line];
      newLine.splice(index, 1);
      return newLine;
    });
    setData(newData);
    hideDeleteButtons();
  };

  const addLine = () => () => {
    const newData = [...data];
    const newLine = [];
    for (let i = 0; i < data[0].length; i++) {
      newLine.push("");
    }
    newData.push(newLine);
    setData(newData);
  };

  const addColumn = () => () => {
    const newData = data.map((line) => {
      const newLine = [...line];
      newLine.push("");
      return newLine;
    });
    setData(newData);
  };

  return (
    <div id={parentId} onMouseEnter={hideDeleteButtons}>
      <div className="header-root" style={{ marginLeft: `${cellSize + 2}px` }}>
        <Button
          id="deleteColumn"
          onClick={deleteColumn}
          isVisible={deleteCellBtnIndex !== null}
          cellSize={cellSize}
          isDeleteBtn={true}
          isDeleteColumn={true}
          deleteBtnIndex={deleteCellBtnIndex}
          hideDeleteButtons={hideDeleteButtons}
        />
      </div>
      <div className="body-root" onMouseEnter={hideDeleteButtons}>
        <div className="left-body-root">
          <Button
            id="deleteLine"
            onClick={deleteLine}
            isVisible={deleteLineBtnIndex !== null}
            cellSize={cellSize}
            isDeleteBtn={true}
            isDeleteColumn={false}
            deleteBtnIndex={deleteLineBtnIndex}
            hideDeleteButtons={hideDeleteButtons}
          />
        </div>
        <Table
          data={data}
          cellSize={cellSize}
          setLineIndex={setDeleteLineBtnIndex}
          setCellIndex={setDeleteCellBtnIndex}
        />
        <div className="right-body-root" onMouseEnter={hideDeleteButtons}>
          <Button
            id="addColumn"
            onClick={addColumn}
            isDeleteBtn={false}
            cellSize={cellSize}
            hideDeleteButtons={hideDeleteButtons}
          />
        </div>
      </div>
      <div className="footer-root" style={{ marginLeft: `${cellSize + 2}px` }}>
        <Button
          id="addLine"
          onClick={addLine}
          isDeleteBtn={false}
          cellSize={cellSize}
          hideDeleteButtons={hideDeleteButtons}
        />
      </div>
    </div>
  );
};

export default Squares;