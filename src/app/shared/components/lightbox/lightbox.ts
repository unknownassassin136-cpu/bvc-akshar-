import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [],
  templateUrl: './lightbox.html',
  styleUrl: './lightbox.scss'
})
export class Lightbox {
  @Input() isOpen = false;
  @Input() mediaItem: any = null;
  @Output() close = new EventEmitter<void>();

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: any) {
    if (this.isOpen) {
      this.closeLightbox();
    }
  }

  closeLightbox() {
    this.isOpen = false;
    this.close.emit();
  }
}
