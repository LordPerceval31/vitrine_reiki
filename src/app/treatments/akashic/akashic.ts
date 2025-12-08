<<<<<<< HEAD
import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { ResponsiveService } from '../../services/responsive';
import { VisibilityService } from '../../services/visibility';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-akashic',
  template: `<section
    #akashicSection
    id="annales akashiques"
    class="transition-all duration-1000 opacity-0 translate-y-10"
    [class.py-16]="
      !responsiveService.isSmallScreen(responsiveService.screenSize$ | async)
    "
    [class.py-0]="
      responsiveService.isSmallScreen(responsiveService.screenSize$ | async)
    "
    [class.opacity-100]="isVisible"
    [class.translate-y-0]="isVisible"
  >
    <div
      *ngIf="
        !responsiveService.isSmallScreen(responsiveService.screenSize$ | async)
      "
      class="mx-auto px-4 sm:px-6 lg:px-8"
      style="max-width: min(90vw, 1280px);"
    >
      <div
        class="w-full text-center mb-8 lg:mb-12 transition-all duration-1000 delay-200"
        [class.opacity-100]="isVisible"
        [class.translate-y-0]="isVisible"
        [class.opacity-0]="!isVisible"
        [class.translate-y-5]="!isVisible"
      >
        <h2
          class="font-bold text-white/90 cursor-default"
          style="font-size: clamp(2rem, 5vw, 3rem);"
        >
          Annales Akashiques
        </h2>
      </div>

<div
  class="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16"
>

  <div
    class="transition-all duration-1000 delay-300"
    style="max-width: min(100%, 512px);"
    [class.opacity-100]="isVisible"
    [class.translate-x-0]="isVisible"
    [class.opacity-0]="!isVisible"
    [class.-translate-x-10]="!isVisible"
  >
    <p
      class="text-white/80 leading-relaxed mb-6 cursor-default text-center text-justify"
      style="font-size: clamp(0.875rem, 1.5vw, 1.125rem);"
    >
      Les Annales Akashiques, aussi appelées "livre cosmique de vie", sont
      un vaste champ d'information énergétique. Cette bibliothèque
      cosmique enregistre l'intégralité du parcours de votre âme à travers
      le temps, incluant toutes ses expériences, ses potentiels et ses
      apprentissages. C'est une ressource concrète et inépuisable.
    </p>
    <p
      class="text-white/80 leading-relaxed cursor-default mb-6 text-center text-justify"
      style="font-size: clamp(0.875rem, 1.5vw, 1.125rem);"
    >
      Chaque séance vous offre un accès direct à la sagesse de votre âme.
      C'est une expérience transformatrice qui révèle les blocages et les
      potentiels non exploités, vous permettant de mieux comprendre vos
      peurs et schémas répétitifs. Cela éclaire votre présent et guide
      votre futur. Les effets des séances sont différents d'une personne à
      l'autre. Tout dépend de l'état d'esprit de chacun et de sa volonté
      de créer le changement.
    </p>
    <p
      class="text-white/80 leading-relaxed mb-6 cursor-default text-center text-justify"
      style="font-size: clamp(0.875rem, 1.5vw, 1.125rem);"
    >
      En tant que praticienne certifiée, mon rôle est d'être un canal
      clair et neutre. Je vous accompagne dans l'exploration de vos vies
      antérieures et la compréhension de vos schémas karmiques. Cette
      pratique vous permet d'obtenir des réponses profondes et de
      découvrir votre mission d'âme, toujours dans le respect de votre
      libre arbitre.
    </p>
  </div>

  <div
    class="flex-shrink-0 transition-all duration-1000 delay-100 flex flex-col items-center"
    [class.opacity-100]="isVisible"
    [class.translate-x-0]="isVisible"
    [class.opacity-0]="!isVisible"
    [class.translate-x-10]="!isVisible"
  >
    <img
      src="./annales.webp"
      alt="Annales Akashiques - Livre de lumière spirituelle"
      class="object-cover rounded-lg border-4 border-yellow-200 shadow-xl mb-4"
      style="width: clamp(250px, 35vw, 384px); 
              height: clamp(167px, 23vw, 256px);
              aspect-ratio: 3/2;"
    />
  </div>
</div>
    </div>

    <div
      *ngIf="
        responsiveService.isSmallScreen(responsiveService.screenSize$ | async)
      "
      class="relative flex items-center py-8 mt-20"
    >
      <div class="absolute inset-0 z-0">
        <img
          src="./annales.webp"
          alt="Annales Akashiques - Livre de lumière spirituelle"
          class="w-full h-full object-cover opacity-30 blur-sm"
        />
      </div>

      <div class="relative z-10 mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-white/95 mb-6 cursor-default">
          Annales Akashiques
        </h2>

        <p class="text-white/90 leading-relaxed mb-6 cursor-default">
           Les Annales Akashiques, aussi appelées "livre cosmique de vie", sont
      un vaste champ d'information énergétique. Cette bibliothèque
      cosmique enregistre l'intégralité du parcours de votre âme à travers
      le temps, incluant toutes ses expériences, ses potentiels et ses
      apprentissages. C'est une ressource concrète et inépuisable.
        </p>
        <p class="text-white/85 leading-relaxed mb-6 cursor-default">
          Chaque séance vous offre un accès direct à la sagesse de votre âme.
      C'est une expérience transformatrice qui révèle les blocages et les
      potentiels non exploités, vous permettant de mieux comprendre vos
      peurs et schémas répétitifs. Cela éclaire votre présent et guide
      votre futur. Les effets des séances sont différents d'une personne à
      l'autre. Tout dépend de l'état d'esprit de chacun et de sa volonté
      de créer le changement.
        </p>
        <p class="text-white/90 leading-relaxed mb-6 cursor-default">
         En tant que praticienne certifiée, mon rôle est d'être un canal
      clair et neutre. Je vous accompagne dans l'exploration de vos vies
      antérieures et la compréhension de vos schémas karmiques. Cette
      pratique vous permet d'obtenir des réponses profondes et de
      découvrir votre mission d'âme, toujours dans le respect de votre
      libre arbitre.
        </p>
      </div>
    </div>
  </section>`,
  imports: [CommonModule],
})
export class Akashic implements AfterViewInit, OnDestroy {
  @ViewChild('akashicSection') akashicSection!: ElementRef<HTMLElement>;

  responsiveService = inject(ResponsiveService);
  private visibilityService = inject(VisibilityService);
  private cdr = inject(ChangeDetectorRef);

  isVisible = false;
  private visibilitySubscription?: Subscription;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isVisible = false;
      this.cdr.detectChanges();

      if (this.akashicSection) {
        this.visibilitySubscription = this.visibilityService
          .observeElement(this.akashicSection.nativeElement, 0.5)
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
=======
import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { ResponsiveService } from '../../services/responsive';
import { VisibilityService } from '../../services/visibility';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-akashic',
  template: `<section
    #akashicSection
    id="annales akashiques"
    class="transition-all duration-1000 opacity-0 translate-y-10"
    [class.py-16]="
      !responsiveService.isSmallScreen(responsiveService.screenSize$ | async)
    "
    [class.py-0]="
      responsiveService.isSmallScreen(responsiveService.screenSize$ | async)
    "
    [class.opacity-100]="isVisible"
    [class.translate-y-0]="isVisible"
  >
    <div
      *ngIf="
        !responsiveService.isSmallScreen(responsiveService.screenSize$ | async)
      "
      class="mx-auto px-4 sm:px-6 lg:px-8"
      style="max-width: min(90vw, 1280px);"
    >
      <div
        class="w-full text-center mb-8 lg:mb-12 transition-all duration-1000 delay-200"
        [class.opacity-100]="isVisible"
        [class.translate-y-0]="isVisible"
        [class.opacity-0]="!isVisible"
        [class.translate-y-5]="!isVisible"
      >
        <h2
          class="font-bold text-white/90 cursor-default"
          style="font-size: clamp(2rem, 5vw, 3rem);"
        >
          Annales Akashiques
        </h2>
      </div>

<div
  class="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16"
>

  <div
    class="transition-all duration-1000 delay-300"
    style="max-width: min(100%, 512px);"
    [class.opacity-100]="isVisible"
    [class.translate-x-0]="isVisible"
    [class.opacity-0]="!isVisible"
    [class.-translate-x-10]="!isVisible"
  >
    <p
      class="text-white/80 leading-relaxed mb-6 cursor-default text-center text-justify"
      style="font-size: clamp(0.875rem, 1.5vw, 1.125rem);"
    >
      Les Annales Akashiques, aussi appelées "livre cosmique de vie", sont
      un vaste champ d'information énergétique. Cette bibliothèque
      cosmique enregistre l'intégralité du parcours de votre âme à travers
      le temps, incluant toutes ses expériences, ses potentiels et ses
      apprentissages. C'est une ressource concrète et inépuisable.
    </p>
    <p
      class="text-white/80 leading-relaxed cursor-default mb-6 text-center text-justify"
      style="font-size: clamp(0.875rem, 1.5vw, 1.125rem);"
    >
          En tant que praticienne certifiée, mon rôle est de vous accompagner, selon vos demandes et vos souhaits, ainsi que vos interrogations face au défis de la vie de tous les jours ; ou dans l'exploration de vos vies
          antérieures et la compréhension de vos schémas karmiques, si vous le souhaitez, toujours dans le respect de votre libre arbitre.
          
    </p>
    <p
      class="text-white/80 leading-relaxed mb-6 cursor-default text-center text-justify"
      style="font-size: clamp(0.875rem, 1.5vw, 1.125rem);"
    >
      C'est une expérience transformatrice qui révèle les blocages et les potentiels non exploités, vous permettant de mieux comprendre vos peurs et schémas répétitifs.
      Cela éclaire votre présent et guide votre futur en vous donnant des réponses profondes.
    </p>
  </div>

  <div
    class="flex-shrink-0 transition-all duration-1000 delay-100 flex flex-col items-center"
    [class.opacity-100]="isVisible"
    [class.translate-x-0]="isVisible"
    [class.opacity-0]="!isVisible"
    [class.translate-x-10]="!isVisible"
  >
    <img
      src="./annales.webp"
      alt="Annales Akashiques - Livre de lumière spirituelle"
      class="object-cover rounded-lg border-4 border-yellow-200 shadow-xl mb-4"
      style="width: clamp(250px, 35vw, 384px); 
              height: clamp(167px, 23vw, 256px);
              aspect-ratio: 3/2;"
    />
  </div>
</div>
    </div>

    <div
      *ngIf="
        responsiveService.isSmallScreen(responsiveService.screenSize$ | async)
      "
      class="relative flex items-center py-8 mt-20"
    >
      <div class="absolute inset-0 z-0">
        <img
          src="./annales.webp"
          alt="Annales Akashiques - Livre de lumière spirituelle"
          class="w-full h-full object-cover opacity-30 blur-sm"
        />
      </div>

      <div class="relative z-10 mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-white/95 mb-6 cursor-default">
          Annales Akashiques
        </h2>

        <p class="text-white/90 leading-relaxed mb-6 cursor-default">
          Les Annales Akashiques, aussi appelées "livre cosmique de vie", sont
          un vaste champ d'information énergétique. Cette bibliothèque cosmique
          enregistre l'intégralité du parcours de votre âme à travers le temps,
          incluant toutes ses expériences, ses potentiels et ses apprentissages.
          C'est une ressource concrète et inépuisable.
        </p>
        <p class="text-white/85 leading-relaxed mb-6 cursor-default">
          En tant que praticienne certifiée, mon rôle est de vous accompagner, selon vos demandes et vos souhaits, ainsi que vos interrogations face au défis de la vie de tous les jours ; ou dans l'exploration de vos vies
          antérieures et la compréhension de vos schémas karmiques, si vous le souhaitez, toujours dans le respect de votre libre arbitre.
        </p>
        <p class="text-white/90 leading-relaxed mb-6 cursor-default">
           Cette
          pratique vous permet d'obtenir des réponses profondes et de découvrir
          votre mission d'âme, toujours dans le respect de votre libre arbitre.
        </p>
      </div>
    </div>
  </section>`,
  imports: [CommonModule],
})
export class Akashic implements AfterViewInit, OnDestroy {
  @ViewChild('akashicSection') akashicSection!: ElementRef<HTMLElement>;

  responsiveService = inject(ResponsiveService);
  private visibilityService = inject(VisibilityService);
  private cdr = inject(ChangeDetectorRef);

  isVisible = false;
  private visibilitySubscription?: Subscription;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isVisible = false;
      this.cdr.detectChanges();

      if (this.akashicSection) {
        this.visibilitySubscription = this.visibilityService
          .observeElement(this.akashicSection.nativeElement, 0.5)
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
>>>>>>> 1341746da1ec14d5a2970e36d5839a64bd2c05dc
