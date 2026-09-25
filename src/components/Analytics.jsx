import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initializeAnalytics, trackPageView } from '../analytics';

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    initializeAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(`${location.pathname}${location.search}`);
  }, [location.pathname, location.search]);

  return null;
}
