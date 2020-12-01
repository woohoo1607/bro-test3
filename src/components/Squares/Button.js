import React from "react";

const Button = ({
  id,
  onClick,
  isDeleteBtn,
  cellSize,
  isVisible,
  isDeleteColumn,
  deleteBtnIndex,
  hideDeleteButtons,
}) => {
  isDeleteBtn = isDeleteBtn || false;
  isVisible = isVisible || false;

  const style = {
    height: `${cellSize + 1}px`,
    width: `${cellSize}px`,
    lineHeight: `${cellSize - 4}px`,
    fontSize: `${cellSize / 2}px`,
  };
  if (isDeleteBtn) {
    style.visibility = isVisible ? "visible" : "hidden";
    if (isDeleteColumn) {
      style.left = `${deleteBtnIndex * cellSize}px`;
    } else {
      style.top = `${deleteBtnIndex * cellSize}px`;
    }
  }
  const className = isDeleteBtn
    ? "item button delete-button"
    : "item button add-button";
  return (
    <button
      id={id}
      onClick={onClick(deleteBtnIndex)}
      className={className}
      style={style}
      onMouseOut={hideDeleteButtons}
    ></button>
  );
};

export default Button;