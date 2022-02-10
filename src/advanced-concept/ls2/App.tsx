/**
 * Route-based code splitting
 * how to setup route-based code splitting into your app using
 * libraries like 'React Router' with React.lazy.
 * (https://reactrouter.com/)
 */

import {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './NavBar';

// ==========================
// For Lazy-loading
// ==========================
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Contact = lazy(() => import('./Pages/Contact'));
const PageNotFound = lazy(() => import('./Pages/PageNotFound'));

// ==========================
// For Mapping links to pages
// ==========================
const routeNames = ['/', '/about', '/contact'];
const routeToLinkName: Record<string, string> = {
  '/': 'Home',
  '/about': 'About Us',
  '/contact': 'Contact Us',
};

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
    <Router>
      <NavBar routeNames={routeNames} routeToLinkName={routeToLinkName} />
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
