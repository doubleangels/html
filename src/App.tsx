import{ Suspense, lazy } from 'react';
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://0a4368d2d941613bda14abf6bca642ae@o244019.ingest.sentry.io/4506085004083200",
  integrations: [
    new Sentry.BrowserTracing({
      tracePropagationTargets: ["localhost", /^https:\/\/doubleangels\.com\//],
    }),
    new Sentry.Replay(),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 1.0,
  replaysOnErrorSampleRate: 1.0,
});

const LazyIntro = lazy(() => import('./components/Intro'));
const LazyAbout = lazy(() => import('./components/About'));
const LazyResume = lazy(() => import('./components/Resume'));
const LazyPortfolio = lazy(() => import('./components/Portfolio'));
const LazyContact = lazy(() => import('./components/Contact'));
const LazyFooter = lazy(() => import('./components/Footer'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyIntro />
      <LazyAbout />
      <LazyResume />
      <LazyPortfolio />
      <LazyContact />
      <LazyFooter />
    </Suspense>
  );
}

export default App;
