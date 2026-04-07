/* import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  imports: [],
  templateUrl: './mobile-menu.html',
  styleUrl: './mobile-menu.scss',
})
export class MobileMenu {
  isMenuOpen = false;

  openMenu() {
    this.isMenuOpen = true;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
} */

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.html',
  styleUrl: './mobile-menu.scss',
})
export class MobileMenu {
  isMenuOpen = false;

  @Output() menuChange = new EventEmitter<boolean>();

  openMenu() {
    this.isMenuOpen = true;
    this.menuChange.emit(true);
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.menuChange.emit(false);
  }
}
