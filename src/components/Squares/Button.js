import React, { useState, useEffect } from "react";

const Button = ({
  id,
  onClick,
  isDeleteBtn = false,
  cellSize,
  isVisible = false,
  isDeleteColumn,
  deleteBtnIndex = 0,
  hideDeleteButtons,
}) => {
  useEffect(() => {
    setPrevIsVisible(isVisible);
  }, [isVisible]);

  const [prevIsVisible, setPrevIsVisible] = useState(isVisible);

  const style = {
    height: `${cellSize}px`,
    width: `${cellSize}px`,
    lineHeight: `${cellSize - 4}px`,
    fontSize: `${cellSize / 2}px`,
  };
  if (isDeleteBtn) {
    style.visibility = isVisible ? "visible" : "hidden";
    style.transition = prevIsVisible
      ? "background-color 0.3s, left 0.5s, top 0.5s ease-in-out"
      : "background-color 0.3s ease-in-out";
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
      onMouseLeave={hideDeleteButtons}
    ></button>
  );
};

export default Button;
