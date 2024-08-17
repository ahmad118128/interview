import { useEffect, useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState<number>(0);
  useEffect(() => {
    localStorage.setItem('counter', JSON.stringify(counter));
  }, [counter]);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}></button>
    </div>
  );
}
