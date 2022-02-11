/**
 * Code-splitting
 *
 * The React.lazy function lets you render
 * a dynamic import as a regular component.
 *
 * 'React.lazy' takes a function that must call a dynamic 'import()'.
 * This must return a 'Promise' which resolves to a module with a
 * 'default' export containing a React component.
 *
 * React.lazy and Suspense are not yet available for server-side rendering.
 * If you want to do code-splitting in a server rendered app,
 * we recommend Loadable Components (https://loadable-components.com/).
 * It has a nice guide for bundle splitting with server-side rendering.
 */

import {Suspense, lazy} from 'react';

const AnotherComponent = lazy(() => import('./AnotherComponent'));
const OtherComponent = lazy(() => import('./OtherComponent'));

export default function App(): JSX.Element {
  /**
   * The lazy component SHOULD THEN BE RENDERED INSIDE A SUSPENSE COMPONENT,
   * which allows us to show some fallback content (such as a loading
   * indicator) while we’re waiting for the lazy component to load.
   *
   * The 'fallback' prop accepts any React elements that you
   * want to render while waiting for the component to load
   */
  const loading = <div>Loading...</div>;
  return (
    <div>
      <Suspense fallback={loading}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </div>
  );
}
