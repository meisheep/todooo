import React, { Component } from 'react';
import TodoList from './TodoList';
import './App.scss';

class App extends Component {
  state = {
    items: [],
    input: '',
  };

  onInputChange = (evt) => {
    this.setState({
      input: evt.target.value,
    });
  };

  onSubmit = () => {
    const { items, input } = this.state;
    const newItem = {
      "pk": items.length,
      "val": input,
    };
    this.setState({
      items: [...items, newItem],
      input: '',
    });
  };

  onDelete = (pk) => {
    const { items } = this.state;
    this.setState({
      items: [...items].filter(item => item.pk !== pk),
    });
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
