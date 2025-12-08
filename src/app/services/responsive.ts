import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { ScreenSize } from '../types/responsive';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  screenSize$ = new BehaviorSubject<ScreenSize>('laptop');
  private resizeHandler = () => this.detectScreenSize();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  detectScreenSize(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const width = window.innerWidth;
    let size: ScreenSize = 'laptop';

    if (width < 420) {
      size = 'mobile';
    } else if (width < 768) {
      size = 'tablet';
    } else if (width < 1366) {
      size = 'laptop';
    } else if (width < 1920) {
      size = 'desktop';
    } else if (width < 2560) {
      size = '2K';
    } else if (width < 3440) {
      size = 'ultrawide';
    } else {
      size = '4k';
    }

    this.screenSize$.next(size);
  }

  isSmallScreen(screenSize: ScreenSize | null): boolean {
    return (
      screenSize !== 'laptop' &&
      screenSize !== 'desktop' &&
      screenSize !== '2K' &&
      screenSize !== 'ultrawide' &&
      screenSize !== '4k'
    );
  }
  startListening(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.detectScreenSize();
    window.addEventListener('resize', this.resizeHandler);
  }

  stopListening(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    window.removeEventListener('resize', this.resizeHandler);
  }
}
