import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { Hero } from './hero';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

describe('Hero', () => {
  let component: Hero;
  let fixture: ComponentFixture<Hero>;

beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [Hero],
    providers: [
      { provide: PLATFORM_ID, useValue: 'browser' },
      provideNoopAnimations()
    ]
  }).compileComponents();

  fixture = TestBed.createComponent(Hero);
  component = fixture.componentInstance;
  
  fixture.detectChanges();
  await fixture.whenStable();

  fixture.detectChanges();
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

it('should text be displayed', () => {
  const compiled = fixture.nativeElement as HTMLElement;
  expect(compiled.querySelector('p')?.textContent).toBeTruthy();
});
});