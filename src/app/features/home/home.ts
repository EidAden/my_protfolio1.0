import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Testimonials } from './sections/testimonials/testimonials';
import { Skills } from './sections/skills/skills';
import { Contact } from './sections/contact/contact';
import { Footer } from '../../core/layout/footer/footer';
import { Projects } from './sections/projects/projects';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Testimonials, Skills, Contact, Footer, Projects],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
