import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { Header } from './header';
import { ScrollService } from '../services/scroll';
import { ResponsiveService } from '../services/responsive';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [
        { provide: PLATFORM_ID, useValue: 'browser' }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the tagline', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Retrouvez votre équilibre énergétique'
    );
  });

  it('should display navigation links', () => {
    const responsiveService = TestBed.inject(ResponsiveService);
    responsiveService.screenSize$.next('desktop');
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Présentation');
    expect(compiled.textContent).toContain('ANNALES AKASHIQUES');
    expect(compiled.textContent).toContain('REIKI USUI');
    expect(compiled.textContent).toContain('LAHOCHI');
    expect(compiled.textContent).toContain('A propos');
    expect(compiled.textContent).toContain('Contact');
  });

  it('should have clickable navigation links', () => {
    const responsiveService = TestBed.inject(ResponsiveService);
    responsiveService.screenSize$.next('desktop');
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('button');
    expect(links.length).toBe(6);

    links.forEach((link) => {
      expect(link.tagName).toBe('BUTTON');
    });
  });

  it('should call scrollService when navigation link is clicked', () => {
    const scrollService = TestBed.inject(ScrollService);
    spyOn(scrollService, 'scrollTo');

    component.navigateTo('contact');

    expect(scrollService.scrollTo).toHaveBeenCalledWith('contact');
  });

  it('should show burger menu on mobile', () => {
    const responsiveService = TestBed.inject(ResponsiveService);
    responsiveService.screenSize$.next('mobile');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const burgerMenu = compiled.querySelector('.burger-menu');
    expect(burgerMenu).toBeTruthy();
  });

  it('should toggle mobile menu when burger is clicked', () => {
    const responsiveService = TestBed.inject(ResponsiveService);
    responsiveService.screenSize$.next('mobile');
    fixture.detectChanges();
  
    const burgerMenu = fixture.nativeElement.querySelector('.burger-menu');
    expect(component.isMobileMenuOpen).toBeFalsy();
    
    burgerMenu.click();
    expect(component.isMobileMenuOpen).toBeTruthy();
  });

  it('should show mobile navigation when menu is open', () => {
    const responsiveService = TestBed.inject(ResponsiveService);
    responsiveService.screenSize$.next('tablet');
    component.isMobileMenuOpen = true;
    fixture.detectChanges();

    const mobileNav = fixture.nativeElement.querySelector('.mobile-nav');
    expect(mobileNav).toBeTruthy();
    
    const links = mobileNav.querySelectorAll('button');
    expect(links.length).toBe(6);
  });

  it('should close mobile menu when navigation link is clicked', () => {
    const responsiveService = TestBed.inject(ResponsiveService);
    responsiveService.screenSize$.next('mobile');
    component.isMobileMenuOpen = true;
    fixture.detectChanges();

    const mobileNav = fixture.nativeElement.querySelector('.mobile-nav');
    const firstLink = mobileNav.querySelector('button');
    
    firstLink.click();
    expect(component.isMobileMenuOpen).toBeFalsy();
  });

  it('should hide desktop navigation on mobile', () => {
    const responsiveService = TestBed.inject(ResponsiveService);
    responsiveService.screenSize$.next('mobile');
    fixture.detectChanges();
    
    const desktopNav = fixture.nativeElement.querySelector('nav:not(.mobile-nav)');
    expect(desktopNav).toBeNull();
  });
});