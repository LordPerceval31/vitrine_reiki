import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../services/notification.service';
import { Subscription } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
 selector: 'app-notification',
 imports: [CommonModule],
 templateUrl: './notification.component.html',
 animations: [
   trigger('slideInOut', [
     transition(':enter', [
       style({ transform: 'translateY(100%)', opacity: 0 }),
       animate('400ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
     ]),
     transition(':leave', [
       animate('300ms ease-in', style({ transform: 'translateY(100%)', opacity: 0 }))
     ])
   ])
 ]
})
export class Notification implements OnInit, OnDestroy {
 message = '';
 type = 'success';
 isVisible = false;
 
 private notificationService = inject(NotificationService);
 private subscription?: Subscription;

 ngOnInit() {
   this.subscription = this.notificationService.notification.subscribe(notification => {
     if (notification) {
       this.message = notification.message;
       this.type = notification.type;
       this.isVisible = true;
       
       setTimeout(() => {
         this.isVisible = false;
       }, notification.duration);
     }
   });
 }

 ngOnDestroy() {
   this.subscription?.unsubscribe();
 }
}