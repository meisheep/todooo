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
        <ul>
          <li>
            Coffee
            <button type="button">Delete</button>
          </li>
          <li>
            Tea
            <button type="button">Delete</button>
          </li>
          <li>
            Milk
            <button type="button">Delete</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
