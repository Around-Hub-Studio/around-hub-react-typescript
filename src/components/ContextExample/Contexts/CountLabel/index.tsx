import { useContext } from 'react';
import { CountContext } from '../index';

export const CountLabel = () => {
  const { count } = useContext(CountContext);
  return <div>{count}</div>;
};