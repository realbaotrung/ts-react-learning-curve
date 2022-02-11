import {useCallback, useState} from 'react';
import {useCountRender} from '../../shared/utilities';

export default function BuggyCounter(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  const handleClick = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  if (counter === 5) {
    throw new Error('I crashed!');
  }
  const countRender = useCountRender();

  return (
    <div>
      <h1 aria-hidden="true" onClick={handleClick}>
        {counter}
      </h1>
      <h3>Count render BuggyCounter: {countRender}</h3>
    </div>
  );
}
