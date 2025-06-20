import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hero } from './hero';

describe('Hero', () => {
  let component: Hero;
  let fixture: ComponentFixture<Hero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should picture be displayed', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('img')?.getAttribute('alt')).toBeTruthy();
  });

  it ('should text be displayed', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toBeTruthy();
  });
});
