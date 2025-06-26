import { TestBed } from '@angular/core/testing';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create success notification', () => {
    service.success('Test success');
    
    service.notification.subscribe(notification => {
      expect(notification?.type).toBe('success');
      expect(notification?.message).toBe('Test success');
      expect(notification?.duration).toBe(3000);
    });
  });

  it('should create error notification', () => {
    service.error('Test error');
    
    service.notification.subscribe(notification => {
      expect(notification?.type).toBe('error');
      expect(notification?.message).toBe('Test error');
      expect(notification?.duration).toBe(3000);
    });
  });
});