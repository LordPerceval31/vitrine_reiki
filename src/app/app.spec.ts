import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Title, Meta } from '@angular/platform-browser';
import { PLATFORM_ID } from '@angular/core';
import { AppComponent } from './app';
import { SeoService } from './services/SEO';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let seoServiceSpy: jasmine.SpyObj<SeoService>;

  beforeEach(async () => {
    // Créer le mock du SeoService
    seoServiceSpy = jasmine.createSpyObj('SeoService', ['updateSEO']);

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: SeoService, useValue: seoServiceSpy },
        { provide: PLATFORM_ID, useValue: 'browser' }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should set the correct title', () => {
    expect(seoServiceSpy.updateSEO).toHaveBeenCalledWith(jasmine.objectContaining({
      title: 'Jocelyne DUBA - Reiki Usui, LaHoChi & Annales Akashiques'
    }));
  });

  it('should add keywords meta tag', () => {
    expect(seoServiceSpy.updateSEO).toHaveBeenCalledWith(jasmine.objectContaining({
      keywords: jasmine.stringContaining('reiki usui, lahochi, annales akashiques, Jocelyne Duba')
    }));
  });

  it('should add author meta tag', () => {
    // L'author est maintenant dans les structured data
    expect(seoServiceSpy.updateSEO).toHaveBeenCalledWith(jasmine.objectContaining({
      structuredData: jasmine.objectContaining({
        provider: jasmine.objectContaining({
          name: 'Jocelyne Duba'
        })
      })
    }));
  });

  it('should call updateSEO once', () => {
    expect(seoServiceSpy.updateSEO).toHaveBeenCalledTimes(1);
  });
});