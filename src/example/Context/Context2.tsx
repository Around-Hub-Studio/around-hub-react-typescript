import React from 'react';

import { TodoProvider } from '../../components/ContextExample/Context';
import { TodoForm } from '../../components/ContextExample/Context/ToDoForm';
import { TodoList } from '../../components/ContextExample/Context/ToDoList';

export const Context2 = () => {
  return (
    <TodoProvider>
      <TodoForm />
      <TodoList />
    </TodoProvider>
  );
};
