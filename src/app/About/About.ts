import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { ResponsiveService } from '../../app/services/responsive';
import { VisibilityService } from '../../app/services/visibility';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  template: ` <section #aboutSection 
         id="About" 
         class="transition-all duration-1000 opacity-0 translate-y-10"
         [class.py-16]="!responsiveService.isSmallScreen(responsiveService.screenSize$ | async)"
         [class.py-0]="responsiveService.isSmallScreen(responsiveService.screenSize$ | async)"
         [class.opacity-100]="isVisible"
         [class.translate-y-0]="isVisible">
  
  <div *ngIf="!responsiveService.isSmallScreen(responsiveService.screenSize$ | async)"
       class="mx-auto px-8 max-w-7xl">
    
    <div class="w-full text-center mb-12 transition-all duration-1000 delay-200"
         [class.opacity-100]="isVisible"
         [class.translate-y-0]="isVisible"
         [class.opacity-0]="!isVisible"
         [class.translate-y-5]="!isVisible"> 
      <h2 class="text-5xl font-bold text-white/90 cursor-default">À propos de moi</h2>
    </div>

    <div class="flex items-center justify-center gap-16">
      
      <div class="max-w-2xl transition-all duration-1000 delay-300"
           [class.opacity-100]="isVisible"
           [class.translate-x-0]="isVisible"
           [class.opacity-0]="!isVisible"
           [class.-translate-x-10]="!isVisible">
        <p class="text-white/80 leading-relaxed mb-6 text-lg cursor-default">
          Le about est une technique de guérison énergétique de haute fréquence transmise par Linda Stein-Luthke. Cette énergie spirituelle puissante travaille avec la 13ème octave de la Flamme Violette pour apporter guérison, équilibre et expansion de conscience.
        </p>
        
        <p class="text-white/80 leading-relaxed mb-6 text-lg cursor-default">
          Cette énergie subtile et transformatrice agit en profondeur pour ouvrir les chakras bloqués, restructurer et équilibrer le corps énergétique. Le about facilite également l'ouverture du cœur et renforce la connexion avec les dimensions spirituelles supérieures.
        </p>
        
        <div class="flex justify-between items-end mt-6">
          <p class="text-white/70 leading-relaxed text-lg flex-1 cursor-default">
            Les séances apportent une sensation de légèreté, de clarté mentale et d'élévation vibratoire. Cette pratique favorise la guérison émotionnelle profonde, l'éveil spirituel et l'alignement avec votre véritable essence divine.
          </p>
        </div>
      </div>
      
    </div>
  </div>

  <div *ngIf="responsiveService.isSmallScreen(responsiveService.screenSize$ | async)"
       class="relative flex items-center py-8 mt-20">

    <div class="relative z-10 mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold text-white/95 mb-6 cursor-default">about</h2>
      
      <p class="text-white/90 leading-relaxed mb-6 cursor-default">
        Le about est une technique de guérison énergétique de haute fréquence transmise par Linda Stein-Luthke. Cette énergie spirituelle puissante travaille avec la 13ème octave de la Flamme Violette pour apporter guérison, équilibre et expansion de conscience.
      </p>
      
      <p class="text-white/90 leading-relaxed mb-6 cursor-default">
        Cette énergie subtile et transformatrice agit en profondeur pour ouvrir les chakras bloqués, restructurer et équilibrer le corps énergétique. Le about facilite également l'ouverture du cœur et renforce la connexion avec les dimensions spirituelles supérieures.
      </p>
      
      <p class="text-white/85 leading-relaxed mb-6 cursor-default">
        Les séances apportent une sensation de légèreté, de clarté mentale et d'élévation vibratoire. Cette pratique favorise la guérison émotionnelle profonde, l'éveil spirituel et l'alignement avec votre véritable essence divine.
      </p>
      
      <div class="mt-6 p-4 bg-gradient-to-r from-purple-600/20 to-blue-500/20 rounded-lg border border-white/10">
        <p class="text-white/95 font-medium text-center text-lg cursor-default">60 min • 60€</p>
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
