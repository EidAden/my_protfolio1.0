import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  router = inject(Router);

  isImprintPage(): boolean {
    /* return this.router.url.includes('imprint'); */
    return this.router.url.includes('imprint') || this.router.url.includes('privacy');
  }

  @Output() menuChange = new EventEmitter<boolean>();

  openMenu() {
    this.menuChange.emit(true);
  }
}
