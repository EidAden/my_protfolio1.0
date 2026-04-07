import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Projects } from './sections/projects/projects';
import { Testimonials } from './sections/testimonials/testimonials';
import { Skills } from './sections/skills/skills';
import { Contact } from './sections/contact/contact';
import { Header } from '../../core/layout/header/header';
import { MobileMenu } from '../../shared/ui/mobile-menu/mobile-menu';
import { Footer } from '../../core/layout/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Projects, Testimonials, Skills, Contact, Header, MobileMenu, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  isMenuOpen = false;
}
