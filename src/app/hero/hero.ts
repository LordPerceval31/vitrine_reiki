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
  
  <div class="mx-auto px-4 sm:px-6 lg:px-8" 
       style="max-width: min(90vw, 1280px);">

    <div class="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
      
      <!-- Responsive profile picture -->
      <div class="flex-shrink-0 transition-all duration-1000 delay-100"
           [class.opacity-100]="isVisible"
           [class.translate-x-0]="isVisible"
           [class.opacity-0]="!isVisible"
           [class.-translate-x-10]="!isVisible">
        <img src="./photo_profil.webp"
             alt="Portrait de Jocelyne Duba, praticienne certifiée en Reiki Usui et LaHoChi depuis longtemps."
             class="object-cover rounded-full border-4 border-white/20 shadow-xl"
             style="width: clamp(200px, 30vw, 384px); 
                    height: clamp(200px, 30vw, 384px);
                    aspect-ratio: 1/1;">
      </div>

      <!-- Responsive text content -->
      <div class="transition-all duration-1000 delay-300"
           style="max-width: min(100%, 512px);"
           [class.opacity-100]="isVisible"
           [class.translate-x-0]="isVisible"
           [class.opacity-0]="!isVisible"
           [class.translate-x-10]="!isVisible">
        
        <h2 class="font-bold text-white/90 mb-6 cursor-default text-center lg:text-left"
            style="font-size: clamp(2.5rem, 5vw, 3rem);">
          Jocelyne Duba
        </h2>
        
        <p class="text-white/80 leading-relaxed mb-6 cursor-default text-center lg:text-left"
           style="font-size: clamp(0.875rem, 1.5vw, 1.125rem);">
          Praticienne certifiée en Reiki Usui et LaHoChi depuis longtemps, je vous accompagne dans votre quête d'équilibre énergétique et de bien-être spirituel.
        </p>
        
        <p class="text-white/80 leading-relaxed mb-6 cursor-default text-center lg:text-left"
           style="font-size: clamp(0.875rem, 1.5vw, 1.125rem);">
          Spécialisée dans la lecture des Annales Akashiques, j'aide mes clients à découvrir leur potentiel intérieur et à harmoniser leurs énergies pour une vie plus épanouie.
        </p>
        
        <p class="text-white/70 leading-relaxed cursor-default text-center lg:text-left"
           style="font-size: clamp(0.875rem, 1.5vw, 1.125rem);">
          Mon approche bienveillante et intuitive vous permettra de retrouver sérénité, clarté mentale et équilibre émotionnel dans un cadre de confiance et de respect.
        </p>
      </div>
      
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