import {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

// ==========================
// For Lazy-loading
// ==========================
export const HomePage = lazy(() => import('./Pages/Home'));
export const AboutPage = lazy(() => import('./Pages/About'));
export const ContactPage = lazy(() => import('./Pages/Contact'));
export const Page404 = lazy(() => import('./Pages/Page404'));

export default function RouterOutlet(): JSX.Element {
  const loading = <div>Loading...</div>;
  return (
    <Suspense fallback={loading}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  );
}
