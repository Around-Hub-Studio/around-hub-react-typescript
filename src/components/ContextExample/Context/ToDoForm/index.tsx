import { useContext, useState } from 'react';
import TodoContext from '../index';

export const TodoForm = () => {
  const [text, setText] = useState('');
  const value = useContext(TodoContext);

  const onSubmit = (e: React.FormEvent) => {
    value?.actions.addTodo(text);
    e.preventDefault();
    setText('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={text}
        placeholder='What to do'
        onChange={(e) => setText(e.target.value)}
      />
      <button>등록</button>
    </form>
  );
};
