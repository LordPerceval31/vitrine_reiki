import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { Usui } from './usui';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

describe('Usui', () => {
  let component: Usui;
  let fixture: ComponentFixture<Usui>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usui],
      providers: [
        { provide: PLATFORM_ID, useValue: 'browser' },
        provideNoopAnimations()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Usui);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct section id', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const section = compiled.querySelector('section');
    expect(section?.id).toBe('REIKI USUI');
  });

  it('should display title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('REIKI USUI');
  });

  it('should display image', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img');
    expect(img).toBeTruthy();
    expect(img?.src).toContain('USUI.webp');
    expect(img?.alt).toContain('REIKI USUI');
  });

  it('should display content paragraphs', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('technique de guérison');
    expect(compiled.textContent).toContain('énergie bienfaisante');
    expect(compiled.textContent).toContain('réduction du stress');
  });
});