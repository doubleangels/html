import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://d633d2a6f2122f358814f236f4ee06d2@o244019.ingest.sentry.io/4506165444739072",
  integrations: [
    Sentry.browserTracingIntegration(),
    // Removed replayIntegration for privacy
  ],
  tracesSampleRate: 1.0, // 100% performance monitoring
  // Removed replay settings - no session replays
});

// Load Google Analytics after page load to improve initial performance
const loadAnalytics = () => {
  import('react-ga4').then(ReactGA => {
    ReactGA.default.initialize("G-G0MB3MGBG1");
    ReactGA.default.send("pageview");
  });
};

// Load analytics after page is fully loaded
if (document.readyState === 'complete') {
  // Page is already loaded
  setTimeout(loadAnalytics, 1000); // Delay by 1 second
} else {
  // Wait for page to load
  window.addEventListener('load', () => {
    setTimeout(loadAnalytics, 1000); // Delay by 1 second
  });
}

// Register Service Worker for caching
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('Service Worker registered successfully:', registration.scope);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  });
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)
