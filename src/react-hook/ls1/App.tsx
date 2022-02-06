import {useState} from 'react';

export default function App(): JSX.Element {
  const [count, setCount] = useState(0);

  function handleClick(): void {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button type="button" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}
