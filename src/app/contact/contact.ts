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
import { environment } from '../environments/environments.local';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements AfterViewInit, OnDestroy {
  @ViewChild('contactSection') contactSection!: ElementRef<HTMLElement>;

  responsiveService = inject(ResponsiveService);
  private visibilityService = inject(VisibilityService);
  private cdr = inject(ChangeDetectorRef);

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
      } else {
        console.log('Contact section NOT found!');
      }
    }, 100);
  }

  sendEmail(e: Event): void {
    e.preventDefault();
    emailjs
    
      .sendForm(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        e.target as HTMLFormElement,
        { publicKey: environment.emailjs.publicKey }
      )
      .then(() => {
        console.log('SUCCESS!');
      })
      .catch((error) => {
        console.log('FAILED...', (error as EmailJSResponseStatus).text);
      });
  }

  ngOnDestroy(): void {
    this.visibilitySubscription?.unsubscribe();
  }
}