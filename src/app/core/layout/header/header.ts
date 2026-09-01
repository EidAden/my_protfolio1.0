/* import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, TranslocoPipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  uiService = inject(UiService);
  router = inject(Router);

  isImprintPage(): boolean {
    return this.router.url.includes('imprint') || this.router.url.includes('privacy');
  }
} */

import { Component, HostListener, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, TranslocoPipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  uiService = inject(UiService);
  router = inject(Router);

  isLargeScreen = window.innerWidth > 1440;

  @HostListener('window:resize')
  onResize(): void {
    this.isLargeScreen = window.innerWidth > 1440;
  }

  isImprintPage(): boolean {
    return this.router.url.includes('imprint') || this.router.url.includes('privacy');
  }

  get logoSrc(): string {
    return this.isImprintPage() || this.isLargeScreen
      ? 'images/header/logo_white.jpg'
      : 'images/header/logo_white.jpg';
  }
}
