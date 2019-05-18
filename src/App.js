import React, { Component } from 'react';
import update from 'react-addons-update';

import TodoTemplate from './components/TodoTemplate';
import TodoItemList from './components/TodoItemList';
import Form from './components/Form';

class App extends Component {

  state = {
    nextId : 3,
    input: '',
    todos: [{
      text : '리액트 소개 01',
      checked : false,
      color : 'black'
    }, {
      text : '리액트 소개 02',
      checked : true,
      color : 'black'
    }, {
      text : '리액트 소개 03',
      checked : false,
      color : 'black'
    }]
  }

  handleChange = (e) => {
    this.setState({
      input : e.target.value
    });
  }

  handleCreate = (todo) => {
    this.setState({
      input : '',
      todos : update(this.state.todos, { $push : [todo] }),
      nextId : this.state.nextId + 1
    });
  }

  handleKeyPress = (e) => {
    if(e.charCode === 13){
      this.handleCreate();
    }
  }

  render() {
    const {input, todos} = this.state;

    const {
      handleChange,
      handleCreate,
      handleKeyPress,
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
        />
      </TodoTemplate>
    );
  }
}

export default App;
