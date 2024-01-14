import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Label } from '../components/Label';

export const PropsAndState = () => {
  const [count, setCount] = useState(0);

  const sub = () => {
    setCount(count - 1);
  };
  const add = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Button onClick={sub} label={'-'} />
      <Label data={count} />
      <Button onClick={add} label={'+'} />
    </>
  );
};
