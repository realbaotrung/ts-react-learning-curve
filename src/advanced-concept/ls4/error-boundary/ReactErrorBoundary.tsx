/**
 * This component provides a simple and reusable wrapper that
 * you can use to wrap around your components. Any rendering
 * errors in your components hierarchy can then be gracefully handled.
 * https://github.com/bvaughn/react-error-boundary#installation
 */

import {ErrorInfo, useState} from 'react';
import {ErrorBoundary, FallbackProps} from 'react-error-boundary';
import BuggyCounter from '../BuggyCounter';

/**
 * In the event of an error if you want to RECOVER FROM THAT ERROR and
 * allow the user to "try again" or continue with their work,
 * you'll need a way to reset the ErrorBoundary's internal state.
 * @param fallBackProps
 * @returns
 */
function ErrorFallback(fallBackProps: FallbackProps): JSX.Element {
  const {error, resetErrorBoundary} = fallBackProps;
  return (
    <div role="alert">
      <p>Something went wrong</p>
      <pre>{error.message}</pre>
      <button type="button" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
}

/**
 * Logging the Error, and ErrorInfo
 * @param error
 * @param errorInfo
 */
function myErrorHandle(error: Error, errorInfo: ErrorInfo): void {
  console.log('My error handle', error, errorInfo);
}

/**
 * 'onReset' attribute: reset the state of app so the error
 * doesn't happen again.
 *
 * Wrap <ErrorBoundary> around any component that may throw an error.
 * This will handle errors thrown by that component and its descendants too.
 */
export const testErrorUI = (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => undefined}
    onError={myErrorHandle}>
    <BuggyCounter />
  </ErrorBoundary>
);

function Bomb(): JSX.Element {
  throw new Error(`💥 CABOOM 💥`);
}
/**
 * The 'resetKeys' prop which is an array of elements for the ErrorBoundary
 * to check each render (if there's currently an error state).
 * If any of those elements change between renders, then
 * the ErrorBoundary will reset the state which will re-render the children.
 * @returns
 */
export default function TestErrorUI(): JSX.Element {
  const [explode, setExplore] = useState<boolean>(false);

  return (
    <div>
      {/* <button type="button" onClick={() => setExplore((e) => !e)}> */}
      <button type="button" onClick={() => setExplore(!explode)}>
        toggle explode
      </button>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setExplore(false)}
        resetKeys={[explode]}>
        {explode ? <Bomb /> : null}
      </ErrorBoundary>
    </div>
  );
}
/*
eslint
  no-console: "off",
*/
