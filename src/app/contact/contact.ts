import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { ResponsiveService } from '../services/responsive';
import { VisibilityService } from '../services/visibility';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../environments/environment';
import { EnergyClickDirective } from '../directives/energy-click';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, EnergyClickDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements AfterViewInit, OnDestroy {
  @ViewChild('contactSection') contactSection!: ElementRef<HTMLElement>;

  responsiveService = inject(ResponsiveService);
  private visibilityService = inject(VisibilityService);
  private cdr = inject(ChangeDetectorRef);
  private notificationService = inject(NotificationService);

  isVisible = false;
  private visibilitySubscription?: Subscription;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isVisible = false;
      this.cdr.detectChanges();

      if (this.contactSection) {
        this.visibilitySubscription = this.visibilityService
          .observeElement(this.contactSection.nativeElement, 0.5)
          .subscribe((visible: boolean) => {
            this.isVisible = visible;
            this.cdr.detectChanges();
          });
      }
    }, 100);
  }

  sendEmail(e: Event): void {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get('user_name') as string;
    const email = formData.get('user_email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
      this.notificationService.error('Veuillez remplir tous les informations obligatoires');
      return;
    }

     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.notificationService.error('Format d\'email invalide');
      return;
    }

    emailjs
      .sendForm(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        e.target as HTMLFormElement,
        { publicKey: environment.emailjs.publicKey }
      )
      .then(() => {
        this.notificationService.success('Email envoyé avec succès !');
        form.reset(); 
      })
      .catch(() => {
        this.notificationService.error('Erreur lors de l\'envoi');
      });
  }

  ngOnDestroy(): void {
    this.visibilitySubscription?.unsubscribe();
  }
}