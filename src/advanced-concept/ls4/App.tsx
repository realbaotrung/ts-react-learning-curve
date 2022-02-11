/**
 * Error Boundaries
 *
 * ERROR BOUNDARIES ARE REACT COMPONENTS that catch JavaScript errors
 * anywhere in their child component tree, log those errors, and display
 * a fallback UI instead of the component tree that crashed.
 *
 * ERROR BOUNDARIES DO NOT CATCH:
 * 1. Event handlers.(ERROR BOUNDARIES do not catch errors inside this)
 * 2. Asynchronous code (setTimeout, requestAnimationFrame...).
 * 3. Server side rendering.
 * 4. Errors thrown in the Error Boundary itself.
 *
 * ERROR BOUNDARIES ONLY CATCH ERRORS IN THE COMPONENTS BELOW THEM IN THE TREE.
 *
 * ====================
 * <ErrorBoundary>
 *   <MyWidget />
 * </ErrorBoundary>
 * ====================
 */

import BuggyCounter from './BuggyCounter';
import MyErrorBoundary from './error-boundary/MyErrorBoundary';
import TestErrorUI, {testErrorUI} from './error-boundary/ReactErrorBoundary';

export default function App(): JSX.Element {
  return (
    <div>
      <p>
        <b>
          This is an example of error boundaries in React 16.
          <br />
          <br />
          Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw when it reaches 5. This simulates a
          JavaScript error in a component.
        </b>
      </p>
      <hr />
      <MyErrorBoundary>
        <p>
          These two counters are inside the same error boundary. If one crashes,
          the error boundary will replace both of them.
        </p>
        <BuggyCounter />
        <BuggyCounter />
      </MyErrorBoundary>
      <hr />
      <p>
        These two counters are each inside of their own error boundary. So if
        one crashes, the other is not affected.
      </p>
      <MyErrorBoundary>
        <BuggyCounter />
      </MyErrorBoundary>
      <MyErrorBoundary>
        <BuggyCounter />
      </MyErrorBoundary>
      <hr />
      <p>
        ErrorBoundary that is created by (github/bvaughn/react-error-boundary)
      </p>
      {testErrorUI}
      <hr />
      <TestErrorUI />
    </div>
  );
}
