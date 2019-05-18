import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const {todos,onRemove} = this.props;

    const todoItemList = todos.map(
      (value, index) => (
        <TodoItem
          key={index}
          selectKey={index}
          value={value}
          onRemove={onRemove}
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
