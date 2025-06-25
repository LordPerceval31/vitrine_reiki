import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Contact } from './contact';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environments.local';

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct section id', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const section = compiled.querySelector('section');
    expect(section?.id).toBe('contact');
  });

  it('should display title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Contactez-moi');
  });

  it('should display content paragraphs', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('ce formulaire');
  });

  it('should have form with name input', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const nameInput = compiled.querySelector('[name="user_name"]');

    expect(form).toBeTruthy();
    expect(nameInput).toBeTruthy();
    expect(nameInput?.getAttribute('type')).toBe('text');
  });

  it('should have submit button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const submitButton = compiled.querySelector('button[type="submit"]');

    expect(submitButton).toBeTruthy();
    expect(submitButton?.textContent?.trim()).toBe('✨ Envoyer');
  });

  it('should call sendEmail when form is submitted', fakeAsync(() => {
    spyOn(component, 'sendEmail');

    const form = fixture.nativeElement.querySelector('form');
    const event = new Event('submit');

    form.dispatchEvent(event);
    tick();

    expect(component.sendEmail).toHaveBeenCalledWith(event);
  }));

  it('should call emailjs.sendForm when sendEmail is called', () => {
    const mockResponse: EmailJSResponseStatus = {
      status: 200,
      text: 'SUCCESS!',
    };

    spyOn(emailjs, 'sendForm').and.returnValue(Promise.resolve(mockResponse));

    const mockForm = document.createElement('form');
    const mockEvent = new Event('submit');
    Object.defineProperty(mockEvent, 'target', {
      value: mockForm,
      writable: false,
    });

    component.sendEmail(mockEvent);

    expect(emailjs.sendForm).toHaveBeenCalledWith(
      environment.emailjs.serviceId,
      environment.emailjs.templateId,
      mockForm,
      { publicKey: environment.emailjs.publicKey }
    );
  });

  it('should prevent default when form is submitted', () => {
    const mockForm = document.createElement('form');
    const mockEvent = new Event('submit');
    Object.defineProperty(mockEvent, 'target', {
      value: mockForm,
      writable: false,
    });

    spyOn(mockEvent, 'preventDefault');
    spyOn(emailjs, 'sendForm').and.returnValue(
      Promise.resolve({
        status: 200,
        text: 'SUCCESS!',
      } as EmailJSResponseStatus)
    );

    component.sendEmail(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });
});
