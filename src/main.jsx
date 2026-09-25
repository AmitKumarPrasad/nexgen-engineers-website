import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles.css';
import App from './App';
import MonitoringErrorBoundary from './components/MonitoringErrorBoundary';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MonitoringErrorBoundary>
      <App />
    </MonitoringErrorBoundary>
  </StrictMode>
);
