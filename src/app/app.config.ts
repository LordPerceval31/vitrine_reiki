import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), // Gestion des erreurs globales
    provideZoneChangeDetection({ eventCoalescing: true }), // Système de détection des changements
    provideRouter(routes), // Système de navigation (routes)
    // provideClientHydration() 
  ]
};
