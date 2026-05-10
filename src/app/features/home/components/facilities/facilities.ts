import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { environment } from '../../../../../environments/environment';
import { ImageFallback } from '../../../../shared/directives/image-fallback';

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [ImageFallback],
  templateUrl: './facilities.html',
  styleUrl: './facilities.scss'
})
export class Facilities implements AfterViewInit, OnDestroy {
  @ViewChild('facilitiesSection') facilitiesSection!: ElementRef;
  
  facilities = environment.facilities;
  private ctx!: gsap.Context;

  ngAfterViewInit() {
    this.ctx = gsap.context(() => {
      // Cinematic image reveal
      gsap.from('.facility-img-wrapper', {
        scrollTrigger: {
          trigger: this.facilitiesSection.nativeElement,
          start: 'top 70%',
        },
        x: -50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });

      // Stagger feature blocks
      gsap.from('.facility-block', {
        scrollTrigger: {
          trigger: '.facilities-content',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      });
    });
  }

  ngOnDestroy() {
    if (this.ctx) {
      this.ctx.revert();
    }
  }
}
