import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
`;

const App = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 `localStorage`에서 카운터 값을 불러옴
    const storedCount = localStorage.getItem('count');
    if (storedCount !== null) {
      setCount(parseInt(storedCount, 10));
    }
  }, []);

  useEffect(() => {
    // `count` 값이 변경될 때 `localStorage`에 저장
    localStorage.setItem('count', count.toString());
  }, [count]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const removeCount = () => {
    setCount(0);
    localStorage.removeItem('count');
  };
  const clear = () => {
    setCount(0);
    localStorage.clear();
  };

  return (
    <Container>
      <Title>Counter: {count}</Title>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={removeCount}>Remove Count</button>
      <button onClick={clear}>Clear</button>
    </Container>
  );
};

export default App;
