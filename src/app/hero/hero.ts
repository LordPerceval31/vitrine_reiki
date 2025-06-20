import { Component, inject } from '@angular/core';
import { ResponsiveService } from '../services/responsive';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  imports: [CommonModule],
  animations: [
    trigger('fadeSlide', [
      transition('void => simple', [
        style({ opacity: 0 }),
        animate('2000ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition('void => slide', [
        style({ opacity: 0, transform: 'translateX(-100px)' }),
        animate('2000ms ease-in-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('fadeSlideRight', [
      transition('void => simple', [
        style({ opacity: 0 }),
        animate('2000ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition('void => slide', [
        style({ opacity: 0, transform: 'translateX(100px)' }),
        animate('2000ms 200ms ease-in-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class Hero {
  responsiveService = inject(ResponsiveService);
}