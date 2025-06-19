import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), // Gestion des erreurs globales
    provideZoneChangeDetection({ eventCoalescing: true }), // Système de détection des changements
    provideRouter(routes), provideClientHydration(withEventReplay()), // Système de navigation (routes)
    // provideClientHydration() 
  ]
};
