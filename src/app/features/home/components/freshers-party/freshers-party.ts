import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Lightbox } from '../../../../shared/components/lightbox/lightbox';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-freshers-party',
  standalone: true,
  imports: [Lightbox],
  templateUrl: './freshers-party.html',
  styleUrl: './freshers-party.scss'
})
export class FreshersParty implements AfterViewInit, OnDestroy {
  @ViewChild('freshersSection') freshersSection!: ElementRef;
  
  partyImages = environment.media.freshersParty;
  
  isLightboxOpen = false;
  currentMedia: any = null;
  private ctx!: gsap.Context;

  ngAfterViewInit() {
    this.ctx = gsap.context(() => {
      // Lightweight stagger for masonry items
      gsap.from('.masonry-item', {
        scrollTrigger: {
          trigger: this.freshersSection.nativeElement,
          start: 'top 70%',
        },
        scale: 0.9,
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.2)'
      });
    });
  }

  ngOnDestroy() {
    if (this.ctx) {
      this.ctx.revert();
    }
  }

  openLightbox(image: any) {
    this.currentMedia = { ...image, type: 'image', title: 'Freshers Vibe', category: 'Freshers Party' };
    this.isLightboxOpen = true;
  }

  closeLightbox() {
    this.isLightboxOpen = false;
    this.currentMedia = null;
  }
}
