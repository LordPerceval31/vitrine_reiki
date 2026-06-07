import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { Communication } from './communication';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

describe('Communication', () => {
  let component: Communication;
  let fixture: ComponentFixture<Communication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Communication],
      providers: [
        { provide: PLATFORM_ID, useValue: 'browser' },
        provideNoopAnimations(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Communication);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct section id', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const section = compiled.querySelector('section');
    expect(section?.id).toBe('communication-animale');
  });

  it('should display title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Communication animale');
  });

  it('should display image', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img');
    expect(img).toBeTruthy();
    expect(img?.src).toContain('COMMUNICATION_ANIMALE.webp');
    expect(img?.alt).toContain('Communication animale');
  });

  it('should display content paragraphs', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('communication animale');
    expect(compiled.textContent).toContain('avec l’animal');
    expect(compiled.textContent).toContain('Déménagement');
  });
});
