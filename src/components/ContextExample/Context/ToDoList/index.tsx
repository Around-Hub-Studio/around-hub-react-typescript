import { TodoItem } from '../ToDoItem';
import { useContext } from 'react';
import TodoContext from '../index';

export const TodoList = () => {
  const value = useContext(TodoContext);

  return (
    <ul>
      {value?.state.todoList.map((todo) => (
        <TodoItem todo={todo} key={todo.no} />
      ))}
    </ul>
  );
};
