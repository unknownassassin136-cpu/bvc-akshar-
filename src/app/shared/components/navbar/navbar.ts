import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  isScrolled = false;
  isMobileMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollToSection(sectionId: string) {
    this.isMobileMenuOpen = false;
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }
}

