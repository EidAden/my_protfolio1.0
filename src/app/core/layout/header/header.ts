/* import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  router = inject(Router);
  translocoService = inject(TranslocoService);
  @Output() menuChange = new EventEmitter<boolean>();

  isImprintPage(): boolean {
    return this.router.url.includes('imprint') || this.router.url.includes('privacy');
  }
  changeLang(lang: 'en' | 'de') {
    this.translocoService.setActiveLang(lang);
  }
  get activeLang() {
    return this.translocoService.getActiveLang();
  }

  openMenu() {
    this.menuChange.emit(true);
  }
} */

import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-header',
  imports: [RouterLink, TranslocoPipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  router = inject(Router);
  translocoService = inject(TranslocoService);

  @Output() menuChange = new EventEmitter<boolean>();

  isImprintPage(): boolean {
    return this.router.url.includes('imprint') || this.router.url.includes('privacy');
  }

  changeLang(lang: 'en' | 'de') {
    this.translocoService.setActiveLang(lang);
  }

  get activeLang() {
    return this.translocoService.getActiveLang();
  }

  openMenu() {
    this.menuChange.emit(true);
  }
}
