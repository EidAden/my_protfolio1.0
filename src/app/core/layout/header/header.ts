import { Component, inject } from '@angular/core';
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
}
