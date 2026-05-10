import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Lightbox } from '../../../../shared/components/lightbox/lightbox';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { ImageFallback } from '../../../../shared/directives/image-fallback';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [Lightbox, ImageFallback],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery implements AfterViewInit, OnDestroy {
  @ViewChild('gallerySection') gallerySection!: ElementRef;
  
  categories = environment.media.categories;
  activeCategory = 'All';
  
  allMedia = [...environment.media.gallery, ...environment.media.reels];
  filteredMedia = this.allMedia;
  
  isLightboxOpen = false;
  currentMedia: any = null;
  private ctx!: gsap.Context;

  ngAfterViewInit() {
    this.initAnimations();
  }

  ngOnDestroy() {
    if (this.ctx) {
      this.ctx.revert();
    }
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
    if (cat === 'All') {
      this.filteredMedia = this.allMedia;
    } else {
      this.filteredMedia = this.allMedia.filter(m => m.category === cat);
    }
    
    // Re-trigger animation on filter change
    setTimeout(() => {
      this.animateGalleryItems();
    }, 50);
  }

  private initAnimations() {
    this.ctx = gsap.context(() => {
      gsap.from('.gallery-header', {
        scrollTrigger: {
          trigger: this.gallerySection.nativeElement,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8
      });
      this.animateGalleryItems();
    });
  }

  private animateGalleryItems() {
    // Lightweight animation to prevent performance issues
    gsap.fromTo('.gallery-item', 
      { scale: 0.95, opacity: 0, y: 20 },
      { scale: 1, opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out', clearProps: 'all' }
    );
  }

  openLightbox(media: any) {
    this.currentMedia = media;
    this.isLightboxOpen = true;
  }

  closeLightbox() {
    this.isLightboxOpen = false;
    this.currentMedia = null;
  }
}
