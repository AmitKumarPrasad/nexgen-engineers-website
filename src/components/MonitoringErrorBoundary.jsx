import { Component } from 'react';

const monitoringEndpoint = import.meta.env.VITE_MONITORING_ENDPOINT;

function reportError(error, errorInfo) {
  if (!monitoringEndpoint) {
    console.error('NexGen production error', error, errorInfo);
    return;
  }

  void fetch(monitoringEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: error?.message || 'Unknown application error',
      stack: error?.stack || null,
      componentStack: errorInfo?.componentStack || null,
      path: window.location.pathname,
      timestamp: new Date().toISOString(),
    }),
    keepalive: true,
  }).catch(() => {});
}

export default class MonitoringErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    reportError(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="section-space">
          <div className="container text-center">
            <span className="eyebrow">Something went wrong</span>
            <h1 className="display-6 fw-bold mt-2">We couldn't load this page.</h1>
            <p className="text-secondary mt-3">Please refresh the page or return to the home page.</p>
            <a className="btn btn-primary mt-2" href="/">Back to Home</a>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}
