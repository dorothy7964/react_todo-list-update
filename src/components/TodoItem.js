import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.value.checked !== nextProps.value.checked;
  }

  render() {
    const {selectKey,onRemove,onToggle} = this.props;
    const {text,checked,color} = this.props.value;
    console.log(selectKey);
    return(
        <div className="todoItem" style={{color}} onClick={() => onToggle(selectKey,checked)}>
        <div className="remove" onClick={(e) => {
            e.stopPropagation(); // onToggle 이 실행되지 않도록 함
            onRemove(selectKey)}
        }>&times;</div>

      <div className={`todo-text ${checked? 'checked' : ''}`}  >
          {text}
        </div>

        {
          checked && (<div className="check-mark">&#x2713;</div>)
        }
      </div>
    );
  }
}

export default TodoItem;
