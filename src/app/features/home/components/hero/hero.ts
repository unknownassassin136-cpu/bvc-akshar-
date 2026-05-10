import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero implements AfterViewInit, OnDestroy {
  @ViewChild('heroContent') heroContent!: ElementRef;
  @ViewChild('heroBg') heroBg!: ElementRef;
  
  heroImage = environment.media.heroImage;
  heroVideo = environment.media.heroVideo;
  private ctx!: gsap.Context;

  ngAfterViewInit() {
    // GSAP Safety Rule: lightweight animations, no massive timelines
    this.ctx = gsap.context(() => {
      // Background slow zoom parallax
      gsap.to(this.heroBg.nativeElement, {
        scale: 1.05,
        duration: 10,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1
      });

      // Staggered entrance for content
      gsap.from('.hero-stagger', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.3
      });
    });
  }

  ngOnDestroy() {
    if (this.ctx) {
      this.ctx.revert();
    }
  }

  scrollToSection(sectionId: string) {
    // Basic smooth scroll implementation for CTAs
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
