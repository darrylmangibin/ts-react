import React, { useState } from 'react';
import { Todo } from './todo.model';

import TodoList from './compoents/TodoList';
import NewTodo from './compoents/NewTodo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string): void => {
    setTodos(prevState => [...prevState, { id: Math.random().toString(), text }])
  }

  const todoDeleteHandler = (id: string) => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
