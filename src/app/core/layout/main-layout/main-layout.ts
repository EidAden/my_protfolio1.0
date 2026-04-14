import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { MobileMenu } from '../../../shared/ui/mobile-menu/mobile-menu';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Header, Footer, MobileMenu],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  isMenuOpen = false;

  toggleMenu(open: boolean) {
    this.isMenuOpen = open;

    if (open) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }
}
