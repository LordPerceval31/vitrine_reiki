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
  selector: 'app-communication',
  template: `
    <section
      #communicationSection
      id="communication-animale"
      class="transition-all duration-1000 opacity-0 translate-y-10"
      [class.py-16]="!isSmallScreen"
      [class.py-0]="isSmallScreen"
      [class.opacity-100]="isVisible"
      [class.translate-y-0]="isVisible"
    >
      <div class="mx-auto px-6" style="max-width: min(90vw, 1280px);">
        <h2
          class="text-center font-bold text-white/90 mb-12 transition-all duration-1000 delay-200"
          style="font-size: clamp(2rem, 5vw, 3rem);"
          [class.opacity-100]="isVisible"
          [class.translate-y-0]="isVisible"
          [class.opacity-0]="!isVisible"
          [class.translate-y-5]="!isVisible"
        >
          Communication animale
        </h2>

        <div
          class="flex flex-col lg:flex-row items-center justify-center gap-12"
        >
          <img
            src="./COMMUNICATION_ANIMALE.webp"
            alt="Communication animale"
            class="object-cover rounded-lg border-4 border-yellow-200 shadow-xl flex-shrink-0 transition-all duration-1000 delay-100"
            style="width: clamp(250px, 35vw, 384px); aspect-ratio: 3/2;"
            [class.opacity-100]="isVisible"
            [class.translate-x-0]="isVisible"
            [class.opacity-0]="!isVisible"
            [class.-translate-x-10]="!isVisible"
          />

          <div
            class="text-white/80 space-y-4 text-justify transition-all duration-1000 delay-300"
            style="max-width: min(100%, 512px); font-size: clamp(0.875rem, 1.5vw, 1.125rem);"
            [class.opacity-100]="isVisible"
            [class.translate-x-0]="isVisible"
            [class.opacity-0]="!isVisible"
            [class.translate-x-10]="!isVisible"
          >
            <p>
              En complément de mes pratiques énergétiques, je propose des
              séances de communication animale. Il s’agit d’une approche
              télépathique qui permet une connexion avec l’animal pour
              comprendre ses ressentis, ses besoins, ses émotions et ses
              blocages. Cette démarche s’adresse aux animaux vivants ou décédés.
            </p>

            <div class="font-semibold text-white/90 pt-2">
              Dans quel cas y avoir recours ?
            </div>
            <ul class="list-disc pl-5 space-y-2">
              <li>
                Comprendre les messages de votre animal, permet de dénouer bien
                des situations
              </li>
              <li>
                Déménagement, arrivée d’un nouvel animal, baisse de forme ou
                changement de comportement…
              </li>
              <li>
                Apaiser les blessures liées à la séparation et vous accompagner
                dans votre processus de deuil.
              </li>
            </ul>

            <p class="italic pt-2">
              Chaque séance est réalisée à distance, à partir d’une photo, avec
              bienveillance et dans le plus grand respect du rythme et de la
              volonté de l’animal.
            </p>

            <p class="text-sm border-t border-white/20 pt-4 mt-4">
              <strong>Rappel éthique :</strong> “La communication animale, comme
              pour les soins énergétiques, ne remplace en aucun cas un avis ou
              un suivi médical.”
            </p>

            <div class="text-center pt-4">
              <span class="inline-block px-6 py-2 rounded font-bold text-lg"
                >50€ la séance de 60 min</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  imports: [CommonModule],
})
export class Communication implements AfterViewInit, OnDestroy {
  @ViewChild('communicationSection')
  communicationSection!: ElementRef<HTMLElement>;

  private responsiveService = inject(ResponsiveService);
  private visibilityService = inject(VisibilityService);
  private cdr = inject(ChangeDetectorRef);

  isVisible = false;
  private visibilitySubscription?: Subscription;

  get isSmallScreen(): boolean {
    return this.responsiveService.isSmallScreen(
      this.responsiveService.screenSize$.value,
    );
  }

  ngAfterViewInit(): void {
    if (this.communicationSection) {
      this.visibilitySubscription = this.visibilityService
        .observeElement(this.communicationSection.nativeElement, 0.5)
        .subscribe((visible: boolean) => {
          this.isVisible = visible;
          this.cdr.detectChanges();
        });
    }
  }

  ngOnDestroy(): void {
    this.visibilitySubscription?.unsubscribe();
  }
}
