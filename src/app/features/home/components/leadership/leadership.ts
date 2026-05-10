import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { ImageFallback } from '../../../../shared/directives/image-fallback';

@Component({
  selector: 'app-leadership',
  standalone: true,
  imports: [ImageFallback],
  templateUrl: './leadership.html',
  styleUrl: './leadership.scss'
})
export class Leadership implements AfterViewInit, OnDestroy {
  @ViewChild('leadershipSection') leadershipSection!: ElementRef;
  
  leadership = environment.leadership;
  private ctx!: gsap.Context;

  ngAfterViewInit() {
    this.ctx = gsap.context(() => {
      // Lightweight scroll trigger animation for the cards
      gsap.from('.leadership-card', {
        scrollTrigger: {
          trigger: this.leadershipSection.nativeElement,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
      
      gsap.from('.leadership-header', {
        scrollTrigger: {
          trigger: this.leadershipSection.nativeElement,
          start: 'top 85%'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
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
