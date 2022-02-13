import React, {useCallback, useEffect, useRef, useState} from 'react';

/**
 * Create a custom hook that return a ref to the Div element
 * that show (or hide) Tooltip timer whenever mouse over (or out)
 */
function useDivShowTimer(
  setTooltipShown: React.Dispatch<React.SetStateAction<boolean>>
): React.RefObject<HTMLDivElement> {
  const divTooltipRef = useRef<HTMLDivElement>(null);

  /**
   * Setup an event handler when mouse over (mouse out)
   */
  const onMouseOver = useCallback(
    () => setTooltipShown(true),
    [setTooltipShown]
  );
  const onMouseOut = useCallback(
    () => setTooltipShown(false),
    [setTooltipShown]
  );

  useEffect(() => {
    console.log('Add event listeners');

    divTooltipRef.current?.addEventListener('mouseover', onMouseOver);
    divTooltipRef.current?.addEventListener('mouseout', onMouseOut);

    const ref = divTooltipRef.current;
    return () => {
      console.log('Remove event listeners');
      ref?.removeEventListener('mouseover', onMouseOver);
      ref?.removeEventListener('mouseover', onMouseOut);
    };
  }, [onMouseOut, onMouseOver]);

  return divTooltipRef;
}

let timeID = 0;

function Timer(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const [tooltipShown, setTooltipShown] = useState<boolean>(false);

  useEffect(() => {
    timeID += 1;
    const timer = setInterval(() => {
      setCount((currentCount) => {
        console.log(`Timer ${timeID} starts ${currentCount}`);
        return currentCount + 1;
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const divTooltipRef = useDivShowTimer(setTooltipShown);

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
   * We need to reset timer, whenever 'reset' button is click
   * so we use 'key' that helps react check for changes
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
