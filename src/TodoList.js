import React from 'react';

const TodoList = (props) => {
  const { items, onDelete } = props;
  const todoListItems = items.map((item) => (
    <li key={item.pk}>
      {item.val}
      <button type="button" onClick={() => onDelete(item.pk)}>Delete</button>
    </li>
  ));
  return (
    <ul>
      {todoListItems}
    </ul>
  );
};

export default TodoList;
