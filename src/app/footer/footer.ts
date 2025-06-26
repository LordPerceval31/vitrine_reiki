import { Component, inject } from '@angular/core';
import { ResponsiveService } from '../services/responsive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
})
export class Footer {
  responsiveService = inject(ResponsiveService);


    ngOnInit(): void {
    this.responsiveService.startListening();
  }

  ngOnDestroy(): void {
    this.responsiveService.stopListening();
  }
  
}
