import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { Lahochi } from './lahochi';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

describe('Lahochi', () => {
  let component: Lahochi;
  let fixture: ComponentFixture<Lahochi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lahochi],
      providers: [
        { provide: PLATFORM_ID, useValue: 'browser' },
        provideNoopAnimations()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Lahochi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct section id', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const section = compiled.querySelector('section');
    expect(section?.id).toBe('REIKI LAHOCHI');
  });

  it('should display title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('REIKI LAHOCHI');
  });

  it('should display image', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img');
    expect(img).toBeTruthy();
    expect(img?.src).toContain('LAHOCHI.webp');
    expect(img?.alt).toContain('REIKI LAHOCHI');
  });

  it('should display content paragraphs', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('haute fréquence');
    expect(compiled.textContent).toContain('transformatrice');
    expect(compiled.textContent).toContain('sensation de légèreté');
  });
});