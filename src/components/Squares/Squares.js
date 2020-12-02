import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    const initialLine = Array.from({ length: initialWidth }, () => "");
    const initialData = Array.from(
      { length: initialHeight },
      () => initialLine
    );
    setData(initialData);
  }, [initialWidth, initialHeight, cellSize]);

  const hideDeleteButtons = () => {
    setDeleteLineBtnIndex(null);
    setDeleteCellBtnIndex(null);
  };

  const propagationNone = (e) => {
    e.stopPropagation();
  };

  const deleteLine = (index) => () => {
    if (data.length < 2) {
      return;
    }
    const newData = data.filter((line, i) => i !== index);
    setData(newData);
    hideDeleteButtons();
  };

  const deleteColumn = (index) => () => {
    if (data[0].length < 2) {
      return;
    }
    const newData = data.map((line) => line.filter((cell, i) => i !== index));
    setData(newData);
    hideDeleteButtons();
  };

  const addLine = () => () => {
    const newData = [...data];
    const newLine = Array.from({ length: data[0].length }, () => "");
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
      <div
        className="header-root"
        style={{ paddingLeft: `${cellSize + 2}px` }}
        onMouseOver={hideDeleteButtons}
      >
        <div onMouseOver={propagationNone}>
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
      </div>
      <div className="body-root" onMouseEnter={hideDeleteButtons}>
        <div className="left-body-root" onMouseOver={hideDeleteButtons}>
          <div onMouseOver={propagationNone}>
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
        </div>
        <Table
          data={data}
          cellSize={cellSize}
          setLineIndex={setDeleteLineBtnIndex}
          setCellIndex={setDeleteCellBtnIndex}
        />
        <div className="right-body-root" onMouseOver={hideDeleteButtons}>
          <div onMouseOver={propagationNone}>
            <Button
              id="addColumn"
              onClick={addColumn}
              isDeleteBtn={false}
              cellSize={cellSize}
              hideDeleteButtons={hideDeleteButtons}
            />
          </div>
        </div>
      </div>
      <div
        className="footer-root"
        style={{ paddingLeft: `${cellSize + 2}px` }}
        onMouseOver={hideDeleteButtons}
      >
        <div onMouseOver={propagationNone}>
          <Button
            id="addLine"
            onClick={addLine}
            isDeleteBtn={false}
            cellSize={cellSize}
            hideDeleteButtons={hideDeleteButtons}
          />
        </div>
      </div>
    </div>
  );
};

export default Squares;
