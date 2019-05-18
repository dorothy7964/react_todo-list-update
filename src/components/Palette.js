import React from 'react';
import './Palette.css';

const Color = ({color,active}) => {
  return (
    <div
      className="color"
      style={{background : color}}>
    </div>
  )
}

const Palette = ({colors,selectColor}) => {

  const colorList = colors.map(
    (color) => (
      <Color
        color={color}
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
