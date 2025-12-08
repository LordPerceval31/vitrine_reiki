
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LegalNoticeService {
  private isOpen$ = new BehaviorSubject<boolean>(false);
  
  get isOpen() {
    return this.isOpen$.asObservable();
  }
  
  open() {
    this.isOpen$.next(true);
  }
  
  close() {
    this.isOpen$.next(false);
  }
}