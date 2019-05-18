import React from 'react';
import './Palette.css';

const Color = ({color,active,onClick}) => {
  return (
    <div
      className={`color ${active? 'active' : ''}`}
      style={{background : color}}
      onClick={onClick}
    >
    </div>
  )
}

const Palette = ({colors,selectColor,onSelect}) => {

  const colorList = colors.map(
    (color) => (
      <Color
        key={color}
        color={color}
        active={selectColor === color}
        onClick={() => onSelect(color)}
      />
    )
  );

  return (
    <div className="Palette">
      {colorList}
    </div>
  )
}

export default Palette;
