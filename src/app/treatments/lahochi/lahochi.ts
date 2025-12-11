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
  selector: 'app-lahochi',
  template: `<section
    #lahochiSection
    id="LAHOCHI"
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
          LaHoChi
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
            class="text-white/80 leading-relaxed mb-6 cursor-default text-center lg:text-justify"
            style="font-size: clamp(0.875rem, 1.5vw, 1.125rem);"
          >
            Le LaHoChi est une technique de bien-être énergétique dont les
            racines ancestrales plongent dans les traditions de soins chinoises.
            Cette approche douce utilise l'imposition des mains pour agir
            directement sur votre énergie vitale. En réparant les zones de
            faiblesse, elle vous aide à retrouver un équilibre harmonieux entre
            votre corps et votre esprit.
          </p>

          <p
            class="text-white/80 leading-relaxed mb-6 cursor-default text-center lg:text-justify"
            style="font-size: clamp(0.875rem, 1.5vw, 1.125rem);"
          >
            Pendant une séance, il suffit de vous installer confortablement et
            de vous relaxer. Vous pourriez ressentir une sensation de
            chaleur, ou un profond apaisement. En agissant sur les blocages, le
            LaHoChi aide à réduire le stress, à apaiser les tensions, et à
            favoriser une clarté mentale qui vous invite à un lâcher-prise
            total.
          </p>

          <p
            class="text-white/80 leading-relaxed cursor-default text-center lg:text-justify"
            style="font-size: clamp(0.875rem, 1.5vw, 1.125rem);"
          >
            Accessible à tous, le LaHoChi ne demande aucune connaissance ou
            croyance particulière. Mon seul objectif est de vous offrir un
            moment de calme et de sérénité, un espace dédié à votre bien-être.
            C'est une invitation à vous reconnecter à vous-même, à vous
            ressourcer pleinement et à retrouver un sentiment de légèreté.

            <span class="block text-right mt-4">
              <span
                class="inline-flex items-baseline gap-2 px-4 py-1 rounded text-white/90 tracking-wider cursor-default hover:bg-white/5 transition-colors cursor-default"
              >
                <span class="font-bold">60€</span>
                <span>la séance de 60 min</span>
              </span>
            </span>
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
            src="./LAHOCHI.webp"
            alt="LAHOCHI - Livre de lumière spirituelle"
            class="object-cover rounded-lg border-4 border-yellow-200 shadow-xl"
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
          src="./LAHOCHI.webp"
          alt="LAHOCHI - Livre de lumière spirituelle"
          class="w-full h-full object-cover opacity-30 blur-sm"
        />
      </div>

      <div class="relative z-10 mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-white/95 mb-6 cursor-default">
          LAHOCHI
        </h2>

        <p class="text-white/90 leading-relaxed mb-6 cursor-default">
          Le LaHoChi est une technique de bien-être énergétique dont les racines
          ancestrales plongent dans les traditions de soins chinoises. Cette
          approche douce utilise l'imposition des mains pour agir directement
          sur votre énergie vitale. En réparant les zones de faiblesse, elle
          vous aide à retrouver un équilibre harmonieux entre votre corps et
          votre esprit.
        </p>
        <p class="text-white/90 leading-relaxed mb-6 cursor-default">
          Pendant une séance, il suffit de vous installer confortablement et de
          vous relaxer. Vous pourriez ressentir une sensation de chaleur,
          ou un profond apaisement. En agissant sur les blocages, le LaHoChi
          aide à réduire le stress, à apaiser les tensions, et à favoriser une
          clarté mentale qui vous invite à un lâcher-prise total.
        </p>

        <p class="text-white/85 leading-relaxed mb-8 cursor-default">
          Accessible à tous, le LaHoChi ne demande aucune connaissance ou
          croyance particulière. Mon seul objectif est de vous offrir un moment
          de calme et de sérénité, un espace dédié à votre bien-être. C'est une
          invitation à vous reconnecter à vous-même, à vous ressourcer
          pleinement et à retrouver un sentiment de légèreté.
        </p>

        <div
          class="inline-flex px-6 py-2 rounded text-white tracking-wider bg-black/20 backdrop-blur-sm items-baseline gap-2 cursor-default"
        >
          <span class="font-bold">60€</span>
          <span>la séance de 60 min</span>
        </div>
      </div>
    </div>
  </section>`,
  imports: [CommonModule],
})
export class Lahochi implements AfterViewInit, OnDestroy {
  @ViewChild('lahochiSection') lahochiSection!: ElementRef<HTMLElement>;

  responsiveService = inject(ResponsiveService);
  private visibilityService = inject(VisibilityService);
  private cdr = inject(ChangeDetectorRef);

  isVisible = false;
  private visibilitySubscription?: Subscription;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isVisible = false;
      this.cdr.detectChanges();

      if (this.lahochiSection) {
        this.visibilitySubscription = this.visibilityService
          .observeElement(this.lahochiSection.nativeElement, 0.5)
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