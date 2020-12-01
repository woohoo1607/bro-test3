import React, { useState } from 'react';

import Table from "./Table/Table";
import Button from "./Button";
import './styles.css'

const Squares = ({initialWidth, initialHeight, cellSize, parentId}) => {
  initialWidth = initialWidth || 4;
  initialHeight = initialHeight || 4;
  cellSize = cellSize || 50;


  const [isVisibleDeleteLineBtn, setIsVisibleDeleteLineBtn] = useState(false);
  const [isVisibleDeleteColumnBtn, setIsVisibleDeleteColumnBtn] = useState(false);
  const [deleteLineBtnDisplace, setDeleteLineBtnDisplace] = useState(0);
  const [deleteCellBtnDisplace, setDeleteCellBtnDisplace] = useState(0);
  const [deleteLineBtnIndex, setDeleteLineBtnIndex] = useState(0);
  const [deleteCellBtnIndex, setDeleteCellBtnIndex] = useState(0);
  const [data, setData] = useState([])

  if (!data.length) {
    const data = [];
    for (let i = 0; i < initialHeight; i++) {
      const line = [];
      for (let j = 0; j < initialWidth; j++) {
        line.push('');
      }
      data.push(line);
    }
    setData(data);
  }

  const hideDeleteButtons = () => {
    setIsVisibleDeleteLineBtn(false);
    setIsVisibleDeleteColumnBtn(false);
  }

  const whereMouse = (e) => {
    const el = e.relatedTarget;
    if (el) {
      const isItem = !!el.classList.value.split(' ').find(el => el === 'item');
      if (isItem) {
        const line = el.parentNode;
        const isLine = !!el.parentNode.classList.value.split(' ').find(el => el === 'line');
        if (isLine) {
          const [cellIndex, cellLength] = findIndex(el);
          const [lineIndex, lineLength] = findIndex(line);
          setDeleteLineBtnDisplace(lineIndex*cellSize);
          setDeleteCellBtnDisplace(cellIndex*cellSize);
          setDeleteLineBtnIndex(lineIndex);
          setDeleteCellBtnIndex(cellIndex);
          lineLength > 1 ? setIsVisibleDeleteLineBtn(true) : setIsVisibleDeleteLineBtn(false);
          cellLength > 1 ? setIsVisibleDeleteColumnBtn(true) : setIsVisibleDeleteColumnBtn(false);
        }
      } else {
        if (el.parentNode === document) {
          hideDeleteButtons();
          return
        }
        const isBodyRootParent = !!el.parentNode.classList.value.split(' ').find(el => el === 'body-root');
        if (!el) {
          hideDeleteButtons();
        } else if (el.parentNode.id === parentId) {
          hideDeleteButtons();
        } else if (isBodyRootParent && el.className !== 'table') {
          hideDeleteButtons();
        } else if (el.id === parentId) {
          hideDeleteButtons();
        }
      }
    } else {
      hideDeleteButtons();
    }
  };

const findIndex = (element) => {
  for (let i = 0; i < element.parentNode.childNodes.length; i++) {
    if (element.parentNode.childNodes[i] === element) {
      return [i, element.parentNode.childNodes.length]
    }
  }
};

const deleteLine = () => {
  if (data.length < 2) {
    return
  }
  const newData = [...data];
  newData.splice(deleteLineBtnIndex, 1);
  setData(newData);
  hideDeleteButtons();
};

const deleteColumn = () => {
  if (data[0].length < 2) {
    return
  }
  const newData = data.map(line=> {
    const newLine = [...line];
    newLine.splice(deleteCellBtnIndex, 1);
    return newLine
  });
  setData(newData);
  hideDeleteButtons();
};

const addLine = () => {
  const newData = [...data];
  const newLine = [];
  for (let i = 0; i < data[0].length; i++) {
    newLine.push('');
  }
  newData.push(newLine);
  setData(newData);
}

const addColumn = () => {
  const newData = data.map(line => {
    const newLine = [...line];
    newLine.push('');
    return newLine
  })
  setData(newData);
}

  return (
    <div id={parentId} onMouseOut={whereMouse}>
      <div className='header-root' style={{marginLeft: `${cellSize+2}px`}}>
        <Button id='deleteColumn' onClick={deleteColumn} isVisible={isVisibleDeleteColumnBtn} cellSize={cellSize} displace={deleteCellBtnDisplace} isDeleteBtn={true} isDeleteColumn={true}/>
      </div>
      <div className='body-root'>
        <div className='left-body-root'>
          <Button id='deleteLine' onClick={deleteLine} isVisible={isVisibleDeleteLineBtn} cellSize={cellSize} displace={deleteLineBtnDisplace} isDeleteBtn={true} isDeleteColumn={false} />
        </div>
        <Table data={data} cellSize={cellSize}/>
        <div className='right-body-root'>
          <Button id='addColumn' onClick={addColumn} isDeleteBtn={false} cellSize={cellSize} />
        </div>
      </div>
      <div className='footer-root' style={{marginLeft: `${cellSize+2}px`}}>
        <Button id='addLine' onClick={addLine} isDeleteBtn={false} cellSize={cellSize} />
      </div>
    </div>
  );
};

export default Squares;
