// visibility.service.ts
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisibilityService {
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  observeElement(element: HTMLElement, threshold: number = 0.5): Observable<boolean> {
    return new Observable<boolean>(subscriber => {
      // Vérification si on est dans le navigateur
      if (!isPlatformBrowser(this.platformId)) {
        subscriber.next(false);
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            subscriber.next(entry.isIntersecting);
          });
        },
        { 
          threshold,
          rootMargin: '0px 0px'
        }
      );

      observer.observe(element);

      return () => observer.disconnect();
    });
  }

  observeElementHalfVisible(element: HTMLElement): Observable<boolean> {
    return this.observeElement(element, 0.1);
  }
}