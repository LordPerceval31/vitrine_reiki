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
     
        <div
       class="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16"
     >
       <!-- Responsive profile picture -->
       <div
         class="flex-shrink-0 transition-all duration-1000 delay-100"
         [class.opacity-100]="isVisible"
         [class.translate-x-0]="isVisible"
         [class.opacity-0]="!isVisible"
         [class.lg:-translate-x-10]="!isVisible"
       >
         <img
           src="./photo_profil.webp"
           alt="Portrait de Jocelyne Duba, praticienne certifiée en Reiki Usui et LaHoChi depuis longtemps."
           class="object-cover rounded-full border-4 border-yellow-200 shadow-xl"
           style="width: clamp(200px, 30vw, 384px); 
                   height: clamp(200px, 30vw, 384px);
                   aspect-ratio: 1/1;"
         />
       </div>
   <!-- Responsive text content -->
     <div class="transition-all duration-1000 delay-300"
          style="max-width: min(100%, 800px);"
          [class.opacity-100]="isVisible"
          [class.translate-x-0]="isVisible"
          [class.opacity-0]="!isVisible"
          [class.translate-x-10]="!isVisible">
       
       <p class="text-white/80 leading-relaxed mb-6 cursor-default text-center text-justify"
          style="font-size: clamp(0.875rem, 1.5vw, 1.125rem);">
         Bonjour je suis Jocelyne DUBA, après avoir passé la majeure partie de ma carrière dans le milieu médical, j'ai développé une grande compassion et un profond sens de l'écoute pour les patients. C'est dans ce milieu que j'ai compris à quel point l'accompagnement et la bienveillance sont essentiels.
       </p>
       
       <p class="text-white/80 leading-relaxed mb-6 cursor-default text-center text-justify"
          style="font-size: clamp(0.875rem, 1.5vw, 1.125rem);">
         Avant l'heure de la retraite, la question de l'avenir s'est posée, et la réponse m'est apparue comme une évidence : continuer à prendre soin des autres. Je me suis formée aux soins énergétiques avec une certitude grandissante : aider les autres à retrouver leur équilibre intérieur est ma véritable vocation.
       </p>
       
       <p class="text-white/70 leading-relaxed cursor-default text-center text-justify"
          style="font-size: clamp(0.875rem, 1.5vw, 1.125rem);">
         Plus je pratique, plus je vois à quel point l'énergie équilibrée rend plus serein et résilient. Ma mission est de vous accompagner pour que vous trouviez vos propres clés, pour que vous deveniez l'acteur de votre bien-être. C'est en harmonisant votre énergie que vous pourrez faire face aux défis de la vie avec plus de force et de sérénité.
       </p>
     </div>
     
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