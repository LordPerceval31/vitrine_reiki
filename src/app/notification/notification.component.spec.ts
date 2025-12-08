import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { Notification } from './notification.component';

describe('Notification', () => {
  let component: Notification;
  let fixture: ComponentFixture<Notification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notification],
      providers: [
        { provide: PLATFORM_ID, useValue: 'browser' },
        provideNoopAnimations()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Notification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display notification message when visible', () => {
    component.message = 'Test message';
    component.isVisible = true;
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Test message');
  });

  it('should not display notification when not visible', () => {
    component.message = 'Test message';
    component.isVisible = false;
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).not.toContain('Test message');
  });
});