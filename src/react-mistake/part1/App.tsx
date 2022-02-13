import {useCallback, useEffect, useMemo, useState} from 'react';
import './app.scss';

/**
 * Using in demo of useMemo()
 * @param numbers
 * @returns
 */
function aggregate(numbers: number[]): number {
  const initialNumber = 0;
  const sum = (previousNum: number, currentNum: number): number =>
    previousNum + currentNum;

  return numbers.reduce(sum, initialNumber);
}

/**
 Rules
 *  Always use the setter for useState
 *  Always put a dependency array an useEffect, useCallback, useMemo
 *  To run useEffect only once use an empty array
 *  Don't depend on data you set
 */
function MyComponent(): JSX.Element {
  console.log('App started');

  /**
   * Core variables, which are used by useEffect(), useCallback(), useMemo()
   */
  const [numbers, setNumbers] = useState<number[]>([]);

  console.log(`MyComponent numbers=${JSON.stringify(numbers)}`);

  /**
   =======================================================
   Example of useEffect()
   * we pass an empty array dependency because,
   * we need the data is fetched only one.
   * inside setNumbers always return a new array
   * "current array concat fetched array"
   =======================================================
   */
  useEffect(() => {
    // Start measurement of time for fetching data
    console.time('timer');

    console.log(`Start fetching...`);
    /**
     * 'numbers.json' file is located in 'public' folder
     */
    fetch('/numbers.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(`=== Data fetching = ${JSON.stringify(data)} ===`);
        setNumbers((currentArray) => [...currentArray, ...data]);
        console.log('Request finished');
        console.log('End fetching...');

        // End measurement of time for fetching data
        console.timeEnd('timer');
      });
  }, []);

  console.log('MyComponent render');

  /*
   =======================================================
   Example of useCallback()
   * inside setNumbers always return a new array
   * "current array concat fetched array"
   =======================================================
   */

  // first Version without array dependency as second argument
  // const addOne = useCallback(() => {
  //   setNumbers((currentNumbers) => [
  //     ...currentNumbers,
  //     currentNumbers.length + 1,
  //   ]);
  // }, []);

  // second Version with array dependency
  const addOne = useCallback(() => {
    setNumbers([...numbers, numbers.length + 1]);
  }, [numbers]);

  /*
   =======================================================
   Example of useMemo()
   * only use for expensive function (or big function)
   =======================================================
   */
  const showSum = useMemo(() => aggregate(numbers), [numbers]);

  console.log('MyComponent finished.');

  const out = (
    <div>
      <div>Numbers: {JSON.stringify(numbers)}</div>
      <div>Sum: {showSum}</div>
      <button type="button" onClick={addOne}>
        Add One
      </button>
    </div>
  );

  return out;
}

export default function App(): JSX.Element {
  return (
    <div className="app">
      <MyComponent />
    </div>
  );
}

/* eslint no-console: "off" */
