/**
 * Route-based code splitting
 * how to setup route-based code splitting into your app using
 * libraries like 'React Router' with React.lazy.
 * (https://reactrouter.com/)
 */

import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from './NavBar';
import RouterOutlet from './router';

export default function App(): JSX.Element {
  /**
   * The lazy component SHOULD THEN BE RENDERED INSIDE A SUSPENSE COMPONENT,
   * which allows us to show some fallback content (such as a loading
   * indicator) while we’re waiting for the lazy component to load.
   *
   * The 'fallback' prop accepts any React elements that you
   * want to render while waiting for the component to load
   */
  return (
    <Router>
      <NavBar />
      <RouterOutlet />
    </Router>
  );
}
