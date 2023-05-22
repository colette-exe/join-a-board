import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { register as registerServiceWorker } from './serviceWorkerRegistration';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

registerServiceWorker();
