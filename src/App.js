import React, { Component } from 'react';
import update from 'react-addons-update';

import TodoTemplate from './components/TodoTemplate';
import TodoItemList from './components/TodoItemList';
import Form from './components/Form';
import Palette from './components/Palette';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends Component {

  state = {
    nextId : 3,
    input: '',
    selectColor : '',
    todos: [{
      text : 'React',
      checked : false,
      color : ''
    }, {
      text : 'immutability Helpers',
      checked : true,
      color : ''
    }, {
      text : 'react-addons-update',
      checked : false,
      color : ''
    }]
  }

  handleChange = (e) => {
    this.setState({
      input : e.target.value
    });
  }

  handleCreate = () => {
    const {input, selectColor} = this.state;
    const data = {
      text : input,
      checked : false,
      color : selectColor
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

  handleSelectColor = (color) => {
    this.setState({
      selectColor : color
    });
  }

  render() {
    const {input, selectColor, todos} = this.state;

    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleRemove,
      handleToggle,
      handleSelectColor
    } = this;

    return(
      <TodoTemplate
        palette={(
          <Palette
            colors={colors}
            selectColor={selectColor}
            onSelect={handleSelectColor}
          />
        )}
        form={(
          <Form
            value={input}
            onChange={handleChange}
            onCreate={handleCreate}
            onKeyPress={handleKeyPress}
            color={selectColor}
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
