import { Component, inject, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { MobileMenu } from '../../../shared/ui/mobile-menu/mobile-menu';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Header, Footer, MobileMenu],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout implements AfterViewInit {
  uiService = inject(UiService);
  isMenuOpen = false;

  ngAfterViewInit(): void {
    const cursor = document.querySelector<HTMLElement>('.custom-cursor');

    if (!cursor) return;

    document.addEventListener('mousemove', (event: MouseEvent) => {
      cursor.style.transform = `translate3d(
        ${event.clientX}px,
        ${event.clientY}px,
        0
      )`;
    });

    document.addEventListener('mouseleave', () => {
      cursor.classList.add('custom-cursor--hidden');
    });

    document.addEventListener('mouseenter', () => {
      cursor.classList.remove('custom-cursor--hidden');
    });
  }
}
