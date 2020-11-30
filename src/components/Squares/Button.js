import React from 'react';

const Button = ({id, onClick, isDeleteBtn, cellSize, displace, isVisible, isDeleteColumn}) => {
  isDeleteBtn = isDeleteBtn || false;
  displace = displace || 0;
  isVisible = isVisible || false;

  const style = {
    height: `${cellSize+1}px`,
    width: `${cellSize}px`,
    lineHeight: `${cellSize-4}px`,
    fontSize: `${cellSize/2}px`
  }
  if (isDeleteBtn) {
    style.visibility = isVisible ? 'visible' : 'hidden';
    if (isDeleteColumn) {
      style.left = `${displace}px`;
    } else {
      style.top = `${displace}px`;
    }
  }
  const className = isDeleteBtn ? 'item button delete-button' : 'item button add-button';
  return (
    <button id={id} onClick={onClick} className={className} style={style}></button>
  )
};

export default Button;
