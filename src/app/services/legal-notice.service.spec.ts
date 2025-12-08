import { TestBed } from '@angular/core/testing';
import { LegalNoticeService } from './legal-notice.service';

describe('LegalNoticeService', () => {
  let service: LegalNoticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegalNoticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start with isOpen false', () => {
    service.isOpen.subscribe(isOpen => {
      expect(isOpen).toBe(false);
    });
  });

  it('should set isOpen to true when open() is called', () => {
    service.open();
    
    service.isOpen.subscribe(isOpen => {
      expect(isOpen).toBe(true);
    });
  });

  it('should set isOpen to false when close() is called', () => {
    service.open();
    service.close();
    
    service.isOpen.subscribe(isOpen => {
      expect(isOpen).toBe(false);
    });
  });
});