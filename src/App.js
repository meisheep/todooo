import React, { Component } from 'react';
import TodoList from './TodoList';
import './App.scss';

class App extends Component {
  state = {
    items: [
      {
        pk: 0,
        val: 'Coffee',
      },
      {
        pk: 1,
        val: 'Tea',
      },
      {
        pk: 2,
        val: 'Milk',
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>Todooo</h1>
        <p>Todooo is a simple todo list written with React.</p>
        <input />
        <button type="button">Submit</button>
        <TodoList />
      </div>
    );
  }
}

export default App;
