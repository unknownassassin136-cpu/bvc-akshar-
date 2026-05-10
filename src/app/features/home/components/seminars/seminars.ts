import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-seminars',
  standalone: true,
  imports: [],
  templateUrl: './seminars.html',
  styleUrl: './seminars.scss'
})
export class Seminars implements AfterViewInit, OnDestroy {
  @ViewChild('seminarSection') seminarSection!: ElementRef;
  private ctx!: gsap.Context;

  ngAfterViewInit() {
    this.ctx = gsap.context(() => {
      // Lightweight fade in for seminars
      gsap.from('.seminar-item', {
        scrollTrigger: {
          trigger: this.seminarSection.nativeElement,
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
