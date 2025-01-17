import { Suspense, lazy } from 'react';
import Intro from './components/Intro';

const LazyAbout = lazy(() => import('./components/About'));
const LazyResume = lazy(() => import('./components/Resume'));
const LazyPortfolio = lazy(() => import('./components/Portfolio'));
const LazyContact = lazy(() => import('./components/Contact'));
const LazyFooter = lazy(() => import('./components/Footer'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Intro />
      <LazyAbout />
      <LazyResume />
      <LazyPortfolio />
      <LazyContact />
      <LazyFooter />
    </Suspense>
  );
}

export default App;
