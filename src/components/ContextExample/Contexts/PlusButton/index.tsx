import { useContext } from 'react';
import { CountContext } from '../index';

export const PlusButton = () => {
  const { plusCount } = useContext(CountContext);

  return <button onClick={plusCount}>+ 1</button>;
};