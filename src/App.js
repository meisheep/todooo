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
    this.fetchAllTodo();
  }

  fetchAllTodo = async () => {
    const response = await axios.get('http://localhost:8000/api/todo');
    this.setState({
      items: response.data,
    });
  };

  onInputChange = (evt) => {
    this.setState({
      input: evt.target.value,
    });
  };

  onSubmit = async () => {
    const { input } = this.state;
    await axios.post('http://localhost:8000/api/todo', {
      val: input,
    });
    await this.fetchAllTodo();
  };

  onDelete = async (pk) => {
    await axios.delete(`http://localhost:8000/api/todo/${pk}`);
    await this.fetchAllTodo();
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
