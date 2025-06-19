import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
scrollTo(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
 
 scrollToTop():void {
     window.scrollTo(0, 0);
 }
}
