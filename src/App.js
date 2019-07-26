import React, { Component } from 'react';
import TodoList from './TodoList';
import './App.scss';

class App extends Component {
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
