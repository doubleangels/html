import { Suspense, lazy } from 'react';
import Intro from './components/IntroSection';

const LazyAboutSection = lazy(() => import('./components/AboutSection'));
const LazyResumeSection = lazy(() => import('./components/ResumeSection'));
const LazyPortfolioSection = lazy(() => import('./components/PortfolioSection'));
const LazyContactSection = lazy(() => import('./components/ContactSection'));
const LazyFooter = lazy(() => import('./components/Footer'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Intro />
      <LazyAboutSection />
      <LazyResumeSection />
      <LazyPortfolioSection />
      <LazyContactSection />
      <LazyFooter />
    </Suspense>
  );
}

export default App;
