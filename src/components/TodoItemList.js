import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    const {todos,onRemove,onToggle} = this.props;
    console.log("TodoItemList");
    const todoItemList = todos.map(
      (value, index) => (
        <TodoItem
          key={index}
          selectKey={index}
          value={value}
          onRemove={onRemove}
          onToggle={onToggle}
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
