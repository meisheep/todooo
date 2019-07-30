import React, { Component } from 'react';
import TodoList from './TodoList';
import './App.scss';

class App extends Component {
  state = {
    items: [],
    input: '',
  };

  onInputChange = (evt) => {
    // how to get new value? => evt.target.value;
    // this.setState
  };

  onSubmit = () => {
    // remember cloning a new array, don't directly manipulate array in state
  };

  onDelete = (pk) => {
    // you can use `filter` to remove item in array
  };

  render() {
    const { items, input } = this.state;
    return (
      <div className="App">
        <h1>Todooo</h1>
        <p>Todooo is a simple todo list written with React.</p>
        <input />
        <button type="button">Submit</button>
        <TodoList items={items} />
      </div>
    );
  }
}

export default App;
