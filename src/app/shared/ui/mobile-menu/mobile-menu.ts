import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from '../../../core/services/ui.service';

@Component({
  selector: 'app-mobile-menu',
  imports: [],
  templateUrl: './mobile-menu.html',
  styleUrl: './mobile-menu.scss',
})
export class MobileMenu {
  uiService = inject(UiService);
  router = inject(Router);

  isImprintPage(): boolean {
    return this.router.url.includes('imprint') || this.router.url.includes('privacy');
  }
}
