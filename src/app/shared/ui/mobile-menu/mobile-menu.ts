import { Component, Output, EventEmitter, Input, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  imports: [],
  templateUrl: './mobile-menu.html',
  styleUrl: './mobile-menu.scss',
})
export class MobileMenu {
  @Input() isMenuOpen = false;

  @Output() menuChange = new EventEmitter<boolean>();

  router = inject(Router);

  isImprintPage(): boolean {
    return this.router.url.includes('imprint') || this.router.url.includes('privacy');
  }

  openMenu() {
    this.menuChange.emit(true);
  }

  closeMenu() {
    this.menuChange.emit(false);
  }
}
