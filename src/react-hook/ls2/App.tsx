import {useEffect, useState} from 'react';

export default function App(): JSX.Element {
  const [count, setCount] = useState(0);

  /**
   * Similar to:
   * 'componentDidMount', 'componentDidUpdate'
   */
  useEffect(() => {
    /** Update the document title using the browser API */
    document.title = `You clicked ${count} times`;
  }, [count]);

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
