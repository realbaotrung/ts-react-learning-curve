import React, {useCallback, useEffect, useRef, useState} from 'react';
import '../app.scss';

/**
 * Create a custom hook that returns a ref to the Div element
 * that shows (or hide) Tooltip timer whenever mouse over (or out)
 */
function useDivShowTimer(): {
  divTooltipRef: React.RefObject<HTMLDivElement>;
  tooltipShown: boolean;
} {
  const [tooltipShown, setTooltipShown] = useState<boolean>(false);
  const divTooltipRef = useRef<HTMLDivElement>(null);

  /**
   * Setup an event handler when mouse over (mouse out)
   */
  const onMouseOver = useCallback(() => setTooltipShown(true), []);
  const onMouseOut = useCallback(() => setTooltipShown(false), []);

  useEffect(() => {
    console.log('Add event listeners');

    // Should assign ref of divTooltipRef inside useEffect()
    const ref = divTooltipRef.current;

    ref?.addEventListener('mouseover', onMouseOver);
    ref?.addEventListener('mouseout', onMouseOut);

    return () => {
      console.log('Remove event listeners');
      ref?.removeEventListener('mouseover', onMouseOver);
      ref?.removeEventListener('mouseover', onMouseOut);
    };
  }, [onMouseOut, onMouseOver]);

  return {divTooltipRef, tooltipShown};
}

let timeID = 0;

function Timer(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const {divTooltipRef, tooltipShown} = useDivShowTimer();

  useEffect(() => {
    timeID += 1;
    const timer = setInterval(() => {
      setCount((currentCount) => {
        console.log(`Timer ${timeID} starts ${currentCount}`);
        return currentCount + 1;
      });
    }, 1000);
    return () => {
      console.log('Clear timer!');
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div>Timer: {count}</div>
      <div ref={divTooltipRef}>Tooltip popper</div>
      {tooltipShown && <div>Tooltip timer: {count}</div>}
    </>
  );
}

export default function App(): JSX.Element {
  /**
   * We need to reset timer, whenever 'Update Index' button is click
   * we also use 'key' that helps React check for changes
   * (add, remove, update) of Timer component
   * 
   Note:
   * React Docs recommend should not use index as a key,
   * but in this situation, it doesn't matter.
   */
  const [index, setIndex] = useState<number>(0);
  const updateIndex = useCallback(() => {
    setIndex((current) => current + 1);
  }, []);

  return (
    <div className="app">
      <Timer key={index.toString()} />
      <div>
        <button type="button" onClick={updateIndex}>
          Update Index
        </button>
      </div>
    </div>
  );
}

/* eslint no-console: "off" */
