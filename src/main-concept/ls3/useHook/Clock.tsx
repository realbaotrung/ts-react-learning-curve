import {useEffect, useState} from 'react';
import {FormattedDate} from './FormattedDate';

let timeID: NodeJS.Timer;

function useDate(): Date {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const tick = (): void => {
      setDate(new Date());
    };
    timeID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timeID);
    };
  }, []); // TODO: should have [], really importance!
  return date;
}

export default function Clock(): JSX.Element {
  const date = useDate();
  return (
    <>
      <h1>Hello, world!</h1>
      <FormattedDate timer={date} />
    </>
  );
}
