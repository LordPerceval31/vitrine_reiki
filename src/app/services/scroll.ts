import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop;
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;
      
      const centerOffset = (windowHeight - elementHeight) / 2;
      const offsetPosition = elementPosition - centerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

 
scrollToTop(): void {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}
}
