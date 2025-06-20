import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[energyClick]'
})
export class EnergyClickDirective {
  private el = inject(ElementRef);

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    this.createEnergyEffect(event);
  }

  private createEnergyEffect(event: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const ripple = document.createElement('div');
    ripple.className = 'absolute rounded-full bg-white/60 w-5 h-5 pointer-events-none z-50 animate-ping';
    ripple.style.left = `${x - 10}px`;
    ripple.style.top = `${y - 10}px`;

    this.el.nativeElement.style.position = 'relative';
    this.el.nativeElement.appendChild(ripple);

    setTimeout(() => ripple.remove(), 1000);
  }
}