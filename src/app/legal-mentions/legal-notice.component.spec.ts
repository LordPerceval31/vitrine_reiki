import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { LegalNoticeComponent } from './legal-notice.component';
import { LegalNoticeService } from '../services/legal-notice.service';
import { BehaviorSubject } from 'rxjs';

describe('LegalNoticeComponent', () => {
  let component: LegalNoticeComponent;
  let fixture: ComponentFixture<LegalNoticeComponent>;
  let mockLegalNoticeService: jasmine.SpyObj<LegalNoticeService>;
  let isOpenSubject: BehaviorSubject<boolean>;

  beforeEach(async () => {
    isOpenSubject = new BehaviorSubject<boolean>(false);
    
    mockLegalNoticeService = jasmine.createSpyObj('LegalNoticeService', ['close'], {
      isOpen: isOpenSubject.asObservable()
    });

    await TestBed.configureTestingModule({
      imports: [LegalNoticeComponent],
      providers: [
        { provide: PLATFORM_ID, useValue: 'browser' },
        { provide: LegalNoticeService, useValue: mockLegalNoticeService },
        provideNoopAnimations()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LegalNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display modal when isOpen is false', () => {
    isOpenSubject.next(false);
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const modal = compiled.querySelector('section');
    expect(modal).toBeNull();
  });

  it('should display modal when isOpen is true', () => {
    isOpenSubject.next(true);
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const modal = compiled.querySelector('section');
    expect(modal).toBeTruthy();
    expect(compiled.textContent).toContain('Mentions légales');
  });

  it('should call service close() when close button is clicked', () => {
    isOpenSubject.next(true);
    fixture.detectChanges();
    
    const closeButton = fixture.nativeElement.querySelector('button');
    closeButton.click();
    
    expect(mockLegalNoticeService.close).toHaveBeenCalled();
  });
});