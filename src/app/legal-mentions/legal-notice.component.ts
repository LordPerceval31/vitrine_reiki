import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { trigger, transition, style, animate } from '@angular/animations';
import { LegalNoticeService } from '../services/legal-notice.service';

@Component({
  selector: 'app-legal-notice',
  imports: [CommonModule],
  templateUrl: './legal-notice.component.html',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LegalNoticeComponent {
  private legalNoticeService = inject(LegalNoticeService);
  
  isOpen$ = this.legalNoticeService.isOpen;
  email = 'j-duba@hotmail.fr';
  
  close() {
    this.legalNoticeService.close();
  }
}