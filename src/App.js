import React, { Component } from 'react';
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
      checked : false,
      color : 'black'
    }, {
      text : '리액트 소개 03',
      checked : true,
      color : 'black'
    }]
  }

  handleChange = (e) => {
    this.setState({
      input : e.target.value
    });
  }

  render() {
    const {input} = this.state;

    const {
      handleChange,
    } = this;

    return(
      <TodoTemplate
        form={(
          <Form
            value={input}
            onChange={handleChange}
          />
        )}
      >
        <TodoItemList />
      </TodoTemplate>
    );
  }
}

export default App;
