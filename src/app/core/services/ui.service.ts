import { Injectable, inject, signal } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private translocoService = inject(TranslocoService);

  isMenuOpen = signal(false);

  openMenu() {
    this.setMenuState(true);
  }

  closeMenu() {
    this.setMenuState(false);
  }

  toggleMenu() {
    this.setMenuState(!this.isMenuOpen());
  }

  private setMenuState(open: boolean) {
    this.isMenuOpen.set(open);

    if (open) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }

  changeLang(lang: 'en' | 'de') {
    this.translocoService.setActiveLang(lang);
  }

  changeLangAndCloseMenu(lang: 'en' | 'de') {
    this.changeLang(lang);
    this.closeMenu();
  }

  get activeLang() {
    return this.translocoService.getActiveLang();
  }
}
