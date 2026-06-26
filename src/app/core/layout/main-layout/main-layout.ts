import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { MobileMenu } from '../../../shared/ui/mobile-menu/mobile-menu';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Header, Footer, MobileMenu],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  uiService = inject(UiService);
  isMenuOpen = false;
}
