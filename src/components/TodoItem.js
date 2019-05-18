import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  render() {
    const {text,checked} = this.props.value;

    return(
      <div className="todoItem">
        <div className="remove">&times;</div>
        <div className={`todo-text ${checked? 'checked' : ''}`}>{text}</div>
        {
          checked && (<div className="check-mark">&#x2713;</div>)
        }
      </div>
    );
  }
}

export default TodoItem;
