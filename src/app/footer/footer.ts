import { Component, inject } from '@angular/core';
import { ResponsiveService } from '../services/responsive';
import { CommonModule } from '@angular/common';
import { LegalNoticeService } from '../services/legal-notice.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
})
export class Footer {
  responsiveService = inject(ResponsiveService);
  private legalNoticeService = inject(LegalNoticeService);


    ngOnInit(): void {
    this.responsiveService.startListening();
  }

  ngOnDestroy(): void {
    this.responsiveService.stopListening();
  }
  openLegalNotice() {
    this.legalNoticeService.open();
  }
}
