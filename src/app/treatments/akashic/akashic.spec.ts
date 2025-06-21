import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { Akashic } from './akashic';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

describe('Akashic', () => {
  let component: Akashic;
  let fixture: ComponentFixture<Akashic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Akashic],
      providers: [
        { provide: PLATFORM_ID, useValue: 'browser' },
        provideNoopAnimations()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Akashic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct section id', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const section = compiled.querySelector('section');
    expect(section?.id).toBe('annales akashiques');
  });

  it('should display title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Annales Akashiques');
  });

  it('should display image', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img');
    expect(img).toBeTruthy();
    expect(img?.src).toContain('annales.webp');
    expect(img?.alt).toContain('Annales Akashiques');
  });

  it('should display content paragraphs', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('bibliothèque énergétique cosmique');
    expect(compiled.textContent).toContain('lectrice certifiée');
    expect(compiled.textContent).toContain('expérience transformatrice');
  });
});