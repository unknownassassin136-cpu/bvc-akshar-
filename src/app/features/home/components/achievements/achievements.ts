import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [],
  templateUrl: './achievements.html',
  styleUrl: './achievements.scss'
})
export class Achievements implements AfterViewInit, OnDestroy {
  @ViewChild('achievementsSection') achievementsSection!: ElementRef;
  
  private ctx!: gsap.Context;

  ngAfterViewInit() {
    this.ctx = gsap.context(() => {
      
      // Floating animation for badges
      gsap.to('.floating-badge', {
        y: -15,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: {
          each: 0.5,
          from: 'random'
        }
      });

      // Animate numbers
      const counters = gsap.utils.toArray('.counter-val') as HTMLElement[];
      counters.forEach((counter) => {
        const targetStr = counter.getAttribute('data-target');
        const target = targetStr ? parseInt(targetStr, 10) : 0;
        
        gsap.to(counter, {
          scrollTrigger: {
            trigger: this.achievementsSection.nativeElement,
            start: 'top 75%',
          },
          innerHTML: target,
          duration: 2.5,
          ease: 'power2.out',
          snap: { innerHTML: 1 },
          onUpdate: function() {
            counter.innerHTML = Math.round(Number(counter.innerHTML)).toString() + (counter.getAttribute('data-suffix') || '');
          }
        });
      });

      // Stagger entrance for rank cards
      gsap.fromTo('.rank-card', 
        { 
          y: 40, 
          opacity: 0,
          scale: 0.95 
        },
        {
          scrollTrigger: {
            trigger: '.ranks-container',
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out'
        }
      );

    });
  }

  ngOnDestroy() {
    if (this.ctx) {
      this.ctx.revert();
    }
  }
}
