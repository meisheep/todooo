import React, { Component } from 'react';
import TodoList from './TodoList';
import axios from 'axios';
import './App.scss';

class App extends Component {
  state = {
    items: [],
    input: '',
  };

  componentDidMount() {
    // fetct data in componentDidMount
  }

  fetchAllTodo = async () => {
    const response = await axios.get('http://localhost:8000/api/todo');
    // update state
  };

  onInputChange = (evt) => {
    this.setState({
      input: evt.target.value,
    });
  };

  onSubmit = async () => {
    // 1. post new todo
    // 2. fetch all items and update
  };

  onDelete = async (pk) => {
    // 1. delete todo with pk
    // 2. fetch all items and update
  };

  render() {
    const { items, input } = this.state;
    return (
      <div className="App">
        <h1>Todooo</h1>
        <p>Todooo is a simple todo list written with React.</p>
        <input onChange={this.onInputChange} value={input} />
        <button type="button" onClick={this.onSubmit}>Submit</button>
        <TodoList
          items={items}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default App;
