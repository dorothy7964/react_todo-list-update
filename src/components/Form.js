import React from 'react';
import './Form.css';

const Form = ({value,onChange}) => {
  return (
    <div className="form">
      <input
        value={value}
        onChange={onChange}
      />
      <div className="create-button">추가</div>
    </div>
  )
}

export default Form;
