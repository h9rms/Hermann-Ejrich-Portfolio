import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

if (navigation?.type === 'reload') {
  history.replaceState(null, '', location.pathname);
  window.scrollTo({ top: 0, behavior: 'instant' });
}

bootstrapApplication(App, appConfig).catch((err) => console.error(err));