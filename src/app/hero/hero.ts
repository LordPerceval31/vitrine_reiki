import { AfterViewInit, Component, ElementRef, inject, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ResponsiveService } from '../services/responsive';
import { VisibilityService } from '../services/visibility'
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero',
  template: `<section #heroSection 
         id="presentation" 
         class="transition-all duration-1000 opacity-0 translate-y-10 mt-28"
[class.py-16]="!responsiveService.isSmallScreen(responsiveService.screenSize$ | async)"
[class.py-0]="responsiveService.isSmallScreen(responsiveService.screenSize$ | async)"
[class.opacity-100]="isVisible"
[class.translate-y-0]="isVisible">
  
  <div *ngIf="!responsiveService.isSmallScreen(responsiveService.screenSize$ | async)"
       class="mx-auto px-8 max-w-7xl">

    <div class="flex items-center justify-center gap-16">
      
      <div class="flex-shrink-0 transition-all duration-1000 delay-100"
           [class.opacity-100]="isVisible"
           [class.translate-x-0]="isVisible"
           [class.opacity-0]="!isVisible"
           [class.-translate-x-10]="!isVisible">
        <img src="./photo_profil.webp"
             alt="Jocelyne Duba - Praticienne Reiki"
             class="w-96 h-96 object-cover rounded-full border-4 border-white/20 shadow-xl">
      </div>

      <div class="max-w-2xl transition-all duration-1000 delay-300"
           [class.opacity-100]="isVisible"
           [class.translate-x-0]="isVisible"
           [class.opacity-0]="!isVisible"
           [class.translate-x-10]="!isVisible">
        
        <h2 class="text-5xl font-bold text-white/90 mb-6 cursor-default">Jocelyne Duba</h2>
        
        <p class="text-white/80 leading-relaxed mb-6 text-lg cursor-default">
          Praticienne certifiée en Reiki Usui et LaHoChi depuis plus de 15 ans, je vous accompagne dans votre quête d'équilibre énergétique et de bien-être spirituel.
        </p>
        
        <p class="text-white/80 leading-relaxed mb-6 text-lg cursor-default">
          Spécialisée dans la lecture des Annales Akashiques, j'aide mes clients à découvrir leur potentiel intérieur et à harmoniser leurs énergies pour une vie plus épanouie.
        </p>
        
        <p class="text-white/70 leading-relaxed text-lg cursor-default">
          Mon approche bienveillante et intuitive vous permettra de retrouver sérénité, clarté mentale et équilibre émotionnel dans un cadre de confiance et de respect.
        </p>
      </div>
      
    </div>
  </div>

  <div *ngIf="responsiveService.isSmallScreen(responsiveService.screenSize$ | async)"
       class="mx-auto px-6 flex flex-col items-center space-y-6">
    
    <div class="transition-all duration-1000 delay-100"
         [class.opacity-100]="isVisible"
         [class.translate-y-0]="isVisible"
         [class.opacity-0]="!isVisible"
         [class.translate-y-10]="!isVisible">
      <img src="./photo_profil.webp"
           alt="Jocelyne Duba - Praticienne Reiki"
           class="w-64 h-64 object-cover rounded-full border-4 border-white/20 shadow-xl">
    </div>

    <div class="text-center transition-all duration-1000 delay-300"
         [class.opacity-100]="isVisible"
         [class.translate-y-0]="isVisible"
         [class.opacity-0]="!isVisible"
         [class.translate-y-10]="!isVisible">
      
      <h2 class="text-4xl font-bold text-white/95 mb-6 cursor-default">Jocelyne Duba</h2>
      
      <p class="text-white/90 leading-relaxed mb-6 cursor-default">
        Praticienne certifiée en Reiki Usui et LaHoChi depuis plus de 15 ans, je vous accompagne dans votre quête d'équilibre énergétique et de bien-être spirituel.
      </p>
      
      <p class="text-white/90 leading-relaxed mb-6 cursor-default">
        Spécialisée dans la lecture des Annales Akashiques, j'aide mes clients à découvrir leur potentiel intérieur et à harmoniser leurs énergies pour une vie plus épanouie.
      </p>
      
      <p class="text-white/85 leading-relaxed cursor-default">
        Mon approche bienveillante et intuitive vous permettra de retrouver sérénité, clarté mentale et équilibre émotionnel dans un cadre de confiance et de respect.
      </p>
    </div>
  </div>
</section>`,
  imports: [CommonModule],
})

export class Hero implements AfterViewInit, OnDestroy {
  @ViewChild('heroSection') heroSection!: ElementRef<HTMLElement>;
  
  responsiveService = inject(ResponsiveService);
  private visibilityService = inject(VisibilityService);
  private cdr = inject(ChangeDetectorRef);
  
  isVisible = false;
  private visibilitySubscription?: Subscription;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isVisible = false;
      this.cdr.detectChanges();
      
      if (this.heroSection) {
        this.visibilitySubscription = this.visibilityService
          .observeElement(this.heroSection.nativeElement, 0.5)
          .subscribe((visible: boolean) => {
            this.isVisible = visible;
            this.cdr.detectChanges();
          });
      }
    }, 100);
  }

  ngOnDestroy(): void {
    this.visibilitySubscription?.unsubscribe();
  }
}