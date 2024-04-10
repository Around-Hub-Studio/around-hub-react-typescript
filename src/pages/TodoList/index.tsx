import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import { getTodoList } from './services';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
`;

const TodoItem = styled.li`
  margin-bottom: 10px;
  list-style-type: none;
`;

interface DoneProps {
  readonly completed: boolean;
}

const TodoText = styled.span<DoneProps>`
  margin-left: 10px;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
`;

export interface Todo {
  readonly userId: number;
  readonly id: number;
  readonly title: string;
  readonly completed: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<ReadonlyArray<Todo>>([]);

  useEffect(() => {
    // Type 1
    const fetchTodos = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/todos'
        );
        setTodos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    void fetchTodos();

    // Type 2
    void getTodoList(setTodos);
  }, []);

  return (
    <Container>
      <Title>Todo List</Title>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id}>
            <input type='checkbox' checked={todo.completed} readOnly={true} />
            <TodoText completed={todo.completed}>{todo.title}</TodoText>
          </TodoItem>
        ))}
      </ul>
    </Container>
  );
};

export default App;
