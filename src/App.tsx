import React from 'react';

import TodoList from './compoents/TodoList';
import NewTodo from './compoents/NewTodo';

const App: React.FC = () => {
  const todos = [{ id: '1', text: 'Finish the course' }];

  return (
    <div className="App">
      <NewTodo />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
