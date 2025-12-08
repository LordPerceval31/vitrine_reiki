import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../services/scroll';
import { ResponsiveService } from '../services/responsive';
import { EnergyClickDirective } from '../directives/energy-click';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
  imports: [CommonModule, EnergyClickDirective]
})
export class Header implements OnInit, OnDestroy {
  private scrollService = inject(ScrollService);
  responsiveService = inject(ResponsiveService);
  
  isMobileMenuOpen = false;

  ngOnInit(): void {
    this.responsiveService.startListening();
  }

  ngOnDestroy(): void {
    this.responsiveService.stopListening();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  
  navigateTo(sectionId: string): void {
    this.isMobileMenuOpen = false;
    
    if (sectionId === 'presentation') {
      this.scrollService.scrollToTop();
    } else {
      this.scrollService.scrollTo(sectionId);
    }
  }
}