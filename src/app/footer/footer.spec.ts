import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer } from './footer';
import { PLATFORM_ID } from '@angular/core';
import { ResponsiveService } from '../services/responsive';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
      providers: [{ provide: PLATFORM_ID, useValue: 'browser' }],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide desktop navigation on mobile', () => {
    const responsiveService = TestBed.inject(ResponsiveService);
    responsiveService.screenSize$.next('mobile');
    fixture.detectChanges();

    const desktopNav = fixture.nativeElement.querySelector(
      'nav:not(.mobile-nav)'
    );
    expect(desktopNav).toBeNull();
  });

  
});
