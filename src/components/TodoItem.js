import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  render() {
    const {selectKey,onRemove} = this.props;
    const {text,checked} = this.props.value;

    return(
      <div className="todoItem">
        <div className="remove" onClick={(e) => {
            e.stopPropagation(); // onToggle 이 실행되지 않도록 함
            onRemove(selectKey)}
        }>&times;</div>
        <div className={`todo-text ${checked? 'checked' : ''}`}>{text}</div>
        {
          checked && (<div className="check-mark">&#x2713;</div>)
        }
      </div>
    );
  }
}

export default TodoItem;
