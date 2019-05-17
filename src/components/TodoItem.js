import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  render() {
    return(
      <div className="todoItem">
        <div className="remove">&times;</div>
        <div className="todo-text checked">text</div>
        <div className="check-mark">&#x2713;</div>
      </div>
    );
  }
}

export default TodoItem;
