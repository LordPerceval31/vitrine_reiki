import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { ResponsiveService } from '../services/responsive';
import { VisibilityService } from '../services/visibility';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  template: ` <section #aboutSection 
         id="about" 
         class="transition-all duration-1000 opacity-0 translate-y-10"
         [class.py-16]="!responsiveService.isSmallScreen(responsiveService.screenSize$ | async)"
         [class.py-0]="responsiveService.isSmallScreen(responsiveService.screenSize$ | async)"
         [class.opacity-100]="isVisible"
         [class.translate-y-0]="isVisible">
  
  <div class="mx-auto px-4 sm:px-6 lg:px-8" 
       style="max-width: min(90vw, 1280px);">
    
    <!-- Responsive title -->
    <div class="w-full text-center mb-8 lg:mb-12 transition-all duration-1000 delay-200"
         [class.opacity-100]="isVisible"
         [class.translate-y-0]="isVisible"
         [class.opacity-0]="!isVisible"
         [class.translate-y-5]="!isVisible"> 
      <h2 class="font-bold text-white/90 cursor-default"
          style="font-size: clamp(2rem, 5vw, 3rem);">
        À propos de moi
      </h2>
    </div>

    <!-- Centered content container -->
    <div class="flex justify-center">
      
      <!-- Responsive text content -->
      <div class="transition-all duration-1000 delay-300"
           style="max-width: min(100%, 800px);"
           [class.opacity-100]="isVisible"
           [class.translate-y-0]="isVisible"
           [class.opacity-0]="!isVisible"
           [class.translate-y-10]="!isVisible">
        
        <p class="text-white/80 leading-relaxed mb-6 cursor-default text-center"
           style="font-size: clamp(0.875rem, 1.5vw, 1.125rem);">
          Le about est une technique de guérison énergétique de haute fréquence transmise par Linda Stein-Luthke. Cette énergie spirituelle puissante travaille avec la 13ème octave de la Flamme Violette pour apporter guérison, équilibre et expansion de conscience.
        </p>
        
        <p class="text-white/80 leading-relaxed mb-6 cursor-default text-center"
           style="font-size: clamp(0.875rem, 1.5vw, 1.125rem);">
          Cette énergie subtile et transformatrice agit en profondeur pour ouvrir les chakras bloqués, restructurer et équilibrer le corps énergétique. Le about facilite également l'ouverture du cœur et renforce la connexion avec les dimensions spirituelles supérieures.
        </p>
        
        <p class="text-white/70 leading-relaxed cursor-default text-center"
           style="font-size: clamp(0.875rem, 1.5vw, 1.125rem);">
          Les séances apportent une sensation de légèreté, de clarté mentale et d'élévation vibratoire. Cette pratique favorise la guérison émotionnelle profonde, l'éveil spirituel et l'alignement avec votre véritable essence divine.
        </p>
      </div>
      
    </div>
  </div>
</section>`,
  imports: [CommonModule],
})
export class About implements AfterViewInit, OnDestroy {
  @ViewChild('aboutSection') aboutSection!: ElementRef<HTMLElement>;

  responsiveService = inject(ResponsiveService);
  private visibilityService = inject(VisibilityService);
  private cdr = inject(ChangeDetectorRef);

  isVisible = false;
  private visibilitySubscription?: Subscription;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isVisible = false;
      this.cdr.detectChanges();

      if (this.aboutSection) {
        this.visibilitySubscription = this.visibilityService
          .observeElement(this.aboutSection.nativeElement, 0.5)
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