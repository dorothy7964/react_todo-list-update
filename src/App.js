import React, { Component } from 'react';
import update from 'react-addons-update';

import TodoTemplate from './components/TodoTemplate';
import TodoItemList from './components/TodoItemList';
import Form from './components/Form';

class App extends Component {

  state = {
    nextId : 3,
    input: '',
    selectColor : 'balck',
    todos: [{
      text : 'React',
      checked : false,
      color : 'black'
    }, {
      text : 'immutability Helpers',
      checked : true,
      color : 'black'
    }, {
      text : 'react-addons-update',
      checked : false,
      color : 'black'
    }]
  }

  handleChange = (e) => {
    this.setState({
      input : e.target.value
    });
  }

  handleCreate = () => {
    const {input,selectColor} = this.state;
    const data = {
      text : input,
      checked : false,
      color : selectColor,
    }

    this.setState({
      nextId : this.state.nextId + 1,
      input : '',
      todos : update(this.state.todos, { $push : [data] }),
    });
  }

  handleKeyPress = (e) => {
    if(e.charCode === 13){
      this.handleCreate();
    }
  }

  handleRemove = (selectKey) => {
    this.setState({
      nextId : this.state.nextId - 1,
      todos : update(this.state.todos, {
        $splice : [[selectKey, 1]]
      })
    });
  }

  handleToggle = (selectKey, checked) => {
    this.setState({
      todos: update(this.state.todos, {
       [selectKey]: {
          checked : {$set: !checked}
       }
      })
   });
  }

  render() {
    const {input, todos} = this.state;

    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleRemove,
      handleToggle
    } = this;

    return(
      <TodoTemplate
        form={(
          <Form
            value={input}
            onChange={handleChange}
            onCreate={handleCreate}
            onKeyPress={handleKeyPress}
          />
        )}
      >
        <TodoItemList
          todos={todos}
          onRemove={handleRemove}
          onToggle={handleToggle}
        />
      </TodoTemplate>
    );
  }
}

export default App;
