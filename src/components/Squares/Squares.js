import React, { useState, useEffect } from "react";

import Table from "./Table/Table";
import Button from "./Button";
import "./styles.css";

const Squares = ({ initialWidth = 4, initialHeight = 4, cellSize = 50 }) => {
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
    if (data.length > 1) {
      setData((data) => data.filter((line, i) => i !== index));
      hideDeleteButtons();
    }
  };

  const deleteColumn = (index) => () => {
    if (data[0].length > 1) {
      setData((data) =>
        data.map((line) => line.filter((cell, i) => i !== index))
      );
      hideDeleteButtons();
    }
  };

  const addLine = () => () => {
    setData((data) => [
      ...data,
      Array.from({ length: data[0].length }, () => ""),
    ]);
  };

  const addColumn = () => () => {
    setData((data) =>
      data.map((line) => {
        return [...line, ""];
      })
    );
  };

  return (
    <div onMouseEnter={hideDeleteButtons}>
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
