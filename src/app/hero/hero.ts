import { Component, inject } from '@angular/core';
import { ResponsiveService } from '../services/responsive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  imports: [CommonModule]
})
export class Hero {
responsiveService = inject(ResponsiveService);
  
}
