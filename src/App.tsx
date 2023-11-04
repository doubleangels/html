import{ Suspense, lazy } from 'react';
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://d633d2a6f2122f358814f236f4ee06d2@o244019.ingest.sentry.io/4506165444739072",
  integrations: [
    new Sentry.BrowserTracing({
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
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
