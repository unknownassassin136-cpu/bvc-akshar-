import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImageFallback]',
  standalone: true
})
export class ImageFallback {
  @Input() appImageFallback = 'https://placehold.co/600x400/1a1a1a/ffffff?text=Image+Not+Found';

  constructor(private el: ElementRef) {}

  @HostListener('error')
  onError() {
    const element: HTMLImageElement = this.el.nativeElement;
    element.src = this.appImageFallback;
    // Optional: Add a class to indicate fallback state
    element.classList.add('fallback-loaded');
  }
}
