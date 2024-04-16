import { Suspense, lazy } from 'react';
import * as Sentry from "@sentry/react";
import Intro from './components/Intro';

Sentry.init({
  dsn: "https://d633d2a6f2122f358814f236f4ee06d2@o244019.ingest.sentry.io/4506165444739072",
  integrations: [Sentry.browserTracingIntegration()],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 1.0,
  replaysOnErrorSampleRate: 1.0,
});

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
