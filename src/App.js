import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import axios from 'axios';
import './App.scss';

const App = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const fetchAllTodo = async () => {
    const response = await axios.get('http://localhost:8000/api/todo');
    setItems(response.data);
  };

  // componentDidMount
  useEffect(() => {
    fetchAllTodo();
  }, []);

  const onSubmit = async () => {
    setInput('');
    await axios.post('http://localhost:8000/api/todo', {
      val: input,
    });
    fetchAllTodo();
  };

  const onDelete = async (pk) => {
    await axios.delete(`http://localhost:8000/api/todo/${pk}`);
    fetchAllTodo();
  };

  return (
    <div className="App">
      <h1>Todooo</h1>
      <p>Todooo is a simple todo list written with React.</p>
      <input onChange={(evt) => setInput(evt.target.value)} value={input} />
      <button type="button" onClick={onSubmit}>Submit</button>
      <TodoList
        items={items}
        onDelete={onDelete}
      />
    </div>
  );
};

export default App;
