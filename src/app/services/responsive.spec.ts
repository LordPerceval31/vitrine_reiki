import { ResponsiveService } from './responsive';
import { ScreenSize } from '../types/responsive';
import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';

describe('ResponsiveService', () => {
  let service: ResponsiveService;

beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ResponsiveService,
        { provide: PLATFORM_ID, useValue: 'browser' } 
      ]
    });
    service = TestBed.inject(ResponsiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have screenSize$ observable', () => {
    expect(service.screenSize$).toBeDefined();
  });

  it('should detect mobile screen size', () => {
  // Mock window.innerWidth
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 400,
  });
  
  service.detectScreenSize();
  
  service.screenSize$.subscribe(size => {
    expect(size).toBe('mobile');
  });
});
it('should listen to window resize events', () => {
  spyOn(window, 'addEventListener');
  
  service.startListening();
  
  expect(window.addEventListener).toHaveBeenCalledWith('resize', jasmine.any(Function));
});
it('should remove resize listener when stopped', () => {
  spyOn(window, 'removeEventListener');
  
  service.stopListening();
  
  expect(window.removeEventListener).toHaveBeenCalledWith('resize', jasmine.any(Function));
});
});