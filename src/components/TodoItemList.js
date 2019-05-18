import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const {todos} = this.props;

    const todoItemList = todos.map(
      (value, index) => (
        <TodoItem
          key={index}
          value={value}
        />
      )
    );

    return(
      <div>
        {todoItemList}
      </div>
    );
  }
}

export default TodoItemList;
