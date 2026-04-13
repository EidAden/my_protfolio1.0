import { Component, Output, EventEmitter, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  imports: [],
  templateUrl: './mobile-menu.html',
  styleUrl: './mobile-menu.scss',
})
export class MobileMenu {
  @Input() isMenuOpen = false;

  @Output() menuChange = new EventEmitter<boolean>();

  openMenu() {
    this.menuChange.emit(true);
  }

  closeMenu() {
    this.menuChange.emit(false);
  }
}
