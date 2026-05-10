import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-campus-life',
  standalone: true,
  imports: [],
  templateUrl: './campus-life.html',
  styleUrl: './campus-life.scss'
})
export class CampusLife implements AfterViewInit, OnDestroy {
  @ViewChild('campusSection') campusSection!: ElementRef;
  
  campus = environment.campus;
  private ctx!: gsap.Context;

  ngAfterViewInit() {
    this.ctx = gsap.context(() => {
      // Elegant motion transition for hostel and transport cards
      gsap.from('.campus-card', {
        scrollTrigger: {
          trigger: this.campusSection.nativeElement,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
    });
  }

  ngOnDestroy() {
    if (this.ctx) {
      this.ctx.revert();
    }
  }
}
