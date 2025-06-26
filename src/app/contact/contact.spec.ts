const mockEmailJS = {
  sendForm: jasmine.createSpy('sendForm').and.returnValue(Promise.resolve({
    status: 200,
    text: 'SUCCESS!'
  }))
};

import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Contact } from './contact';
import { FormsModule } from '@angular/forms';

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    spyOn(emailjs, 'sendForm').and.callFake(mockEmailJS.sendForm);
    
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

  // Tests pour tous les champs du formulaire
  it('should have name input field', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const nameInput = compiled.querySelector('[name="user_name"]') as HTMLInputElement;
    
    expect(nameInput).toBeTruthy();
    expect(nameInput.type).toBe('text');
    expect(nameInput.required).toBe(true);
    expect(nameInput.id).toBe('name');
  });

  it('should have firstname input field', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const firstnameInput = compiled.querySelector('[name="user_firstname"]') as HTMLInputElement;
    
    expect(firstnameInput).toBeTruthy();
    expect(firstnameInput.type).toBe('text');
    expect(firstnameInput.required).toBe(true);
    expect(firstnameInput.id).toBe('firstName');
  });

  it('should have email input field', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const emailInput = compiled.querySelector('[name="user_email"]') as HTMLInputElement;
    
    expect(emailInput).toBeTruthy();
    expect(emailInput.type).toBe('email');
    expect(emailInput.required).toBe(true);
    expect(emailInput.id).toBe('email');
  });

  it('should have phone input field', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const phoneInput = compiled.querySelector('[name="user_phone"]') as HTMLInputElement;
    
    expect(phoneInput).toBeTruthy();
    expect(phoneInput.type).toBe('tel');
    expect(phoneInput.required).toBe(false);
    expect(phoneInput.id).toBe('mobile_phone');
  });

  it('should have message textarea field', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const messageTextarea = compiled.querySelector('[name="message"]') as HTMLTextAreaElement;
    
    expect(messageTextarea).toBeTruthy();
    expect(messageTextarea.tagName).toBe('TEXTAREA');
    expect(messageTextarea.required).toBe(true);
    expect(messageTextarea.id).toBe('message');
    expect(messageTextarea.rows).toBe(5);
  });

  it('should have all labels for form fields', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    
    const nameLabel = compiled.querySelector('label[for="name"]');
    const firstNameLabel = compiled.querySelector('label[for="firstName"]');
    const emailLabel = compiled.querySelector('label[for="email"]');
    const phoneLabel = compiled.querySelector('label[for="mobile_phone"]');
    const messageLabel = compiled.querySelector('label[for="message"]');
    
    expect(nameLabel?.textContent?.trim()).toBe('Nom *');
    expect(firstNameLabel?.textContent?.trim()).toBe('Prénom *');
    expect(emailLabel?.textContent?.trim()).toBe('Email *');
    expect(phoneLabel?.textContent?.trim()).toBe('Téléphone');
    expect(messageLabel?.textContent?.trim()).toBe('Message *');
  });

  it('should have submit button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const submitButton = compiled.querySelector('button[type="submit"]');

    expect(submitButton).toBeTruthy();
    expect(submitButton?.textContent?.trim()).toBe('✨ Envoyer');
  });

  it('should show validation errors for required fields when empty', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form') as HTMLFormElement;
    
    const submitEvent = new Event('submit');
    form.dispatchEvent(submitEvent);
    
    const nameInput = compiled.querySelector('[name="user_name"]') as HTMLInputElement;
    const firstnameInput = compiled.querySelector('[name="user_firstname"]') as HTMLInputElement;
    const emailInput = compiled.querySelector('[name="user_email"]') as HTMLInputElement;
    const messageInput = compiled.querySelector('[name="message"]') as HTMLTextAreaElement;
    
    expect(nameInput.validity.valid).toBe(false);
    expect(firstnameInput.validity.valid).toBe(false);
    expect(emailInput.validity.valid).toBe(false);
    expect(messageInput.validity.valid).toBe(false);
  });

  it('should validate email format', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const emailInput = compiled.querySelector('[name="user_email"]') as HTMLInputElement;
    
    emailInput.value = 'email-invalide';
    emailInput.dispatchEvent(new Event('input'));
    expect(emailInput.validity.valid).toBe(false);
    
    emailInput.value = 'test@example.com';
    emailInput.dispatchEvent(new Event('input'));
    expect(emailInput.validity.valid).toBe(true);
  });

  it('should update input values when user types', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const nameInput = compiled.querySelector('[name="user_name"]') as HTMLInputElement;
    
    nameInput.value = 'John';
    nameInput.dispatchEvent(new Event('input'));
    
    expect(nameInput.value).toBe('John');
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
  const mockForm = document.createElement('form');
  const mockEvent = new Event('submit');
  Object.defineProperty(mockEvent, 'target', { value: mockForm });

  component.sendEmail(mockEvent);

  expect(emailjs.sendForm).toHaveBeenCalled();
});


  it('should prevent default when form is submitted', () => {
    const mockForm = document.createElement('form');
    const mockEvent = new Event('submit');
    Object.defineProperty(mockEvent, 'target', {
      value: mockForm,
      writable: false,
    });

    spyOn(mockEvent, 'preventDefault');

    component.sendEmail(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });
});