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


import Intro from './components/Intro';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return <>
    <Intro />
    <About />
    <Resume />
    <Portfolio />
    <Contact />
    <Footer />
  </>
}

export default App
