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
 selector: 'app-hero',
 template: ` <section #heroSection 
        id="hero" 
        class="transition-all duration-1000 opacity-0 translate-y-10 mt-28"
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
       Autorisez-vous à aller mieux
     </h2>
   </div>
<div class="flex-shrink-0 transition-all duration-1000 delay-100 flex flex-col items-center"
       [class.opacity-100]="isVisible"
       [class.translate-y-0]="isVisible"
       [class.opacity-0]="!isVisible"
       [class.translate-y-10]="!isVisible">
    <img src="./Les-symboles-de-renaissance-spirituelle.webp"
         alt="Les-symboles-de-renaissance-spirituelle - Livre de lumière spirituelle"
         class="object-cover rounded-lg border-4 border-yellow-200 shadow-xl mb-20"
         style="width: clamp(250px, 35vw, 384px); 
                height: clamp(167px, 23vw, 256px);
                aspect-ratio: 3/2;">
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
       
       <p
           class="text-white/80 leading-relaxed mb-6 cursor-default text-center text-justify"
           style="font-size: clamp(0.875rem, 1.5vw, 1.125rem);"
         >
           Offrez vous un moment pour vous, une pause essentielle pour prendre
           soin de votre corps et de votre esprit.
         </p>
         <p
           class="text-white/80 leading-relaxed mb-6 cursor-default text-center text-justify"
           style="font-size: clamp(0.875rem, 1.5vw, 1.125rem);"
         >
           Grâce aux différentes méthodes de soins énergétiques que je
           pratique, je vous accompagnerai afin que vous retrouviez un
           mieux-être intérieur, une détente, un lâcher prise.
         </p>
         <p
           class="text-white/80 leading-relaxed mb-6 cursor-default text-center text-justify"
           style="font-size: clamp(0.875rem, 1.5vw, 1.125rem);"
         >
           Je vous aiderai à relâcher les tensions, qu'elles soient physiques
           ou émotionnelles, et retrouver la paix et la sérénité avec plus
           d'énergie.
         </p>

         <p
           class="text-white/80 leading-relaxed mb-6 cursor-default text-center text-justify"
           style="font-size: clamp(0.875rem, 1.5vw, 1.125rem);"
         >
           Je serai à votre écoute sans jugement avec bienveillance et
           compassion, afin de mieux vous diriger vers la pratique la plus
           adaptée pour vous.
         </p>

         <p
           class="text-white/70 leading-relaxed mb-6 cursor-default text-center text-justify"
           style="font-size: clamp(0.875rem, 1.5vw, 1.125rem);"
         >
           Je vous donnerai des clés de compréhension, une guidance pour mieux
           appréhender les défis de la vie, et vous redonner confiance et
           espoir.
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