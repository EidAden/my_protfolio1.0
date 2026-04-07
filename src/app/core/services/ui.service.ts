import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  isMenuOpen = signal(false);

  openMenu() {
    this.isMenuOpen.set(true);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  toggleMenu() {
    this.isMenuOpen.update((v) => !v);
  }
}
