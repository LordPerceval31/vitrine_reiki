import { AfterViewInit, Component, ElementRef, inject, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ResponsiveService } from '../../services/responsive';
import { VisibilityService } from '../../services/visibility'
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usui',
  template: `<section #usuiSection 
         id="REIKI USUI" 
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
      <h2 class="text-5xl font-bold text-white/90 cursor-default">REIKI USUI</h2>
    </div>

    <div class="flex items-center justify-center gap-16">
      
      <div class="flex-shrink-0 transition-all duration-1000 delay-100"
           [class.opacity-100]="isVisible"
           [class.translate-x-0]="isVisible"
           [class.opacity-0]="!isVisible"
           [class.-translate-x-10]="!isVisible">
        <img src="./USUI.webp"
             alt="REIKI USUI - Livre de lumière spirituelle"
             class="w-96 h-64 object-cover rounded-lg border-4 border-white/20 shadow-xl">
      </div>

      <div class="max-w-2xl transition-all duration-1000 delay-300"
           [class.opacity-100]="isVisible"
           [class.translate-x-0]="isVisible"
           [class.opacity-0]="!isVisible"
           [class.translate-x-10]="!isVisible">
        <p class="text-white/80 leading-relaxed mb-6 text-lg cursor-default">
          Le Reiki Usui est une technique de guérison énergétique japonaise développée par Mikao Usui au début du 20ème siècle. Cette méthode douce utilise l'imposition des mains pour canaliser l'énergie universelle de vie et favoriser l'auto-guérison naturelle du corps.
        </p>
        
        <p class="text-white/80 leading-relaxed mb-6 text-lg cursor-default">
          Lors d'une séance, vous recevez cette énergie bienfaisante par l'imposition douce des mains sur différents points du corps. Le processus agit simultanément sur les plans physique, émotionnel, mental et spirituel pour libérer les blocages et restaurer l'harmonie énergétique.
        </p>
        
        <div class="flex justify-between items-end mt-6">
          <p class="text-white/70 leading-relaxed text-lg flex-1 cursor-default">
            Les bienfaits incluent la réduction du stress, l'amélioration du sommeil, le soulagement des tensions et une sensation profonde de paix intérieure. Une expérience apaisante qui vous reconnecte à votre essence et stimule vos capacités naturelles de guérison.
          </p>
          <div class="ml-6 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-500/20 rounded-lg border border-white/10">
            <p class="text-white/95 font-medium cursor-default">60 min • 60€</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>

  <div *ngIf="responsiveService.isSmallScreen(responsiveService.screenSize$ | async)"
       class="relative flex items-center py-8 mt-20">
    
    <div class="absolute inset-0 z-0">
      <img src="./USUI.webp"
           alt="REIKI USUI - Livre de lumière spirituelle"
           class="w-full h-full object-cover opacity-30 blur-sm">
    </div>

    <div class="relative z-10 mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold text-white/95 mb-6 cursor-default">REIKI USUI</h2>
      
      <p class="text-white/90 leading-relaxed mb-6 cursor-default">
        Le Reiki Usui est une technique de guérison énergétique japonaise développée par Mikao Usui au début du 20ème siècle. Cette méthode douce utilise l'imposition des mains pour canaliser l'énergie universelle de vie et favoriser l'auto-guérison naturelle du corps.
      </p>
      
      <p class="text-white/90 leading-relaxed mb-6 cursor-default">
        Lors d'une séance, vous recevez cette énergie bienfaisante par l'imposition douce des mains sur différents points du corps. Le processus agit simultanément sur les plans physique, émotionnel, mental et spirituel pour libérer les blocages et restaurer l'harmonie énergétique.
      </p>
      
      <p class="text-white/85 leading-relaxed mb-6 cursor-default">
        Les bienfaits incluent la réduction du stress, l'amélioration du sommeil, le soulagement des tensions et une sensation profonde de paix intérieure. Une expérience apaisante qui vous reconnecte à votre essence et stimule vos capacités naturelles de guérison.
      </p>
      
      <div class="mt-6 p-4 bg-gradient-to-r from-purple-600/20 to-blue-500/20 rounded-lg border border-white/10">
        <p class="text-white/95 font-medium text-center text-lg cursor-default">60 min • 60€</p>
      </div>
    </div>
  </div>
</section>`,
  imports: [CommonModule],
})

export class Usui implements AfterViewInit, OnDestroy {
  @ViewChild('usuiSection') usuiSection!: ElementRef<HTMLElement>;
  
  responsiveService = inject(ResponsiveService);
  private visibilityService = inject(VisibilityService);
  private cdr = inject(ChangeDetectorRef);
  
  isVisible = false;
  private visibilitySubscription?: Subscription;

ngAfterViewInit(): void {
  setTimeout(() => {
    this.isVisible = false;
    this.cdr.detectChanges();
    
    if (this.usuiSection) {
      this.visibilitySubscription = this.visibilityService
        .observeElement(this.usuiSection.nativeElement, 0.5)
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