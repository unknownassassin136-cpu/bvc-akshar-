import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [],
  templateUrl: './programs.html',
  styleUrl: './programs.scss'
})
export class Programs implements AfterViewInit, OnDestroy {
  @ViewChild('programsSection') programsSection!: ElementRef;
  private ctx!: gsap.Context;

  programs = [
    {
      title: 'IIT-JEE Coaching',
      category: 'Engineering',
      description: 'Intensive preparation program for JEE Mains & Advanced with top-tier faculty and structured curriculum.',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
    },
    {
      title: 'NEET Coaching',
      category: 'Medical',
      description: 'Comprehensive medical entrance coaching focused on deep conceptual clarity and extensive practice.',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' // Using same beaker-like icon for now, will differentiate in template
    },
    {
      title: 'MPC Board',
      category: 'Intermediate',
      description: 'State board curriculum integrated with competitive foundation covering Math, Physics, and Chemistry.',
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
    },
    {
      title: 'BiPC Board',
      category: 'Intermediate',
      description: 'State board curriculum with strong emphasis on Biology, Physics, and Chemistry fundamentals.',
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
    }
  ];

  ngAfterViewInit() {
    this.ctx = gsap.context(() => {
      // Lightweight stagger for program cards
      gsap.fromTo('.program-card', 
        { 
          y: 40, 
          opacity: 0 
        },
        {
          scrollTrigger: {
            trigger: this.programsSection.nativeElement,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out'
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
