import React, { Component } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoItemList from './components/TodoItemList';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return(
      <TodoTemplate
        form={(
          <Form />
        )}
      >
        <TodoItemList />
      </TodoTemplate>
    );
  }
}

export default App;
