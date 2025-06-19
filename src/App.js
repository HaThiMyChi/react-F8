import React, { useState, useReducer, useRef, useContext } from 'react';
import { StoreContext } from './store';
import { useStore, actions } from './store';
import Heading from './components/Heading';

export default function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;

  console.log('state', state);
  const handleAddTodo = () => {
    dispatch(actions.addTodo(todoInput));
  };

  return (
    <div>
      <input
        value={todoInput}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />
      <button onClick={handleAddTodo}>Add</button>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}

      <Heading />
    </div>
  );
}
