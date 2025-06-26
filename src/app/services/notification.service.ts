import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NotificationType, NotificationData } from '../types/notifications';

@Injectable({
   providedIn: 'root'
})
export class NotificationService {
   
   private notification$ = new BehaviorSubject<NotificationData | null>(null);
   
   success(message: string, duration: number = 3000) {
       this.notify(message, 'success', duration);
   }
   
   error(message: string, duration: number = 3000) {
       this.notify(message, 'error', duration);
   }
   
   private notify(message: string, type: NotificationType, duration: number) {
       this.notification$.next({
           id: Date.now().toString(),
           message: message,
           type: type,
           duration: duration
       });
   }
   
   get notification() {
       return this.notification$.asObservable();
   }
}