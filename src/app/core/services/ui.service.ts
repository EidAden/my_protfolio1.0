import { Injectable, inject, signal } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

type Language = 'en' | 'de';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private readonly translocoService = inject(TranslocoService);
  private readonly languageStorageKey = 'portfolio-language';
  private readonly defaultLanguage: Language = 'en';

  isMenuOpen = signal(false);
  currentLanguage = signal<Language>(this.defaultLanguage);

  constructor() {
    this.loadSavedLanguage();
  }

  openMenu(): void {
    this.setMenuState(true);
  }

  closeMenu(): void {
    this.setMenuState(false);
  }

  toggleMenu(): void {
    this.setMenuState(!this.isMenuOpen());
  }

  private setMenuState(open: boolean): void {
    this.isMenuOpen.set(open);

    if (open) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }

  changeLang(lang: Language): void {
    this.translocoService.setActiveLang(lang);
    this.currentLanguage.set(lang);

    localStorage.setItem(this.languageStorageKey, lang);
  }

  changeLangAndCloseMenu(lang: Language): void {
    this.changeLang(lang);
    this.closeMenu();
  }

  private loadSavedLanguage(): void {
    const savedLanguage = localStorage.getItem(this.languageStorageKey);

    const language: Language =
      savedLanguage === 'de' || savedLanguage === 'en' ? savedLanguage : this.defaultLanguage;

    this.translocoService.setActiveLang(language);
    this.currentLanguage.set(language);
  }

  get activeLang(): Language {
    return this.currentLanguage();
  }
}
