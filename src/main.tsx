import * as Sentry from '@sentry/react';

// enable only if you are using react-router-dom
// import { useEffect } from 'react';
// import {
//   createRoutesFromChildren,
//   matchRoutes,
//   useLocation,
//   useNavigationType,
// } from "react-router-dom";

import '@fontsource-variable/open-sans';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

Sentry.init({
  dsn: '',
  integrations: [
    // enable only if you are using react-router-dom
    // Sentry.reactRouterV6BrowserTracingIntegration({
    //   useEffect,
    //   useLocation,
    //   useNavigationType,
    //   createRoutesFromChildren,
    //   matchRoutes,
    // }),
    Sentry.replayIntegration(),
  ],

  tracesSampleRate: 1.0,

  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
