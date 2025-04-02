import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import * as Sentry from "@sentry/react";
import ReactGA from "react-ga4";

Sentry.init({
  dsn: "https://d633d2a6f2122f358814f236f4ee06d2@o244019.ingest.sentry.io/4506165444739072",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 1.0,
  replaysOnErrorSampleRate: 1.0,
});

ReactGA.initialize("G-G0MB3MGBG1")

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)
