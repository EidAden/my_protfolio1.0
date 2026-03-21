/* import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  title = input<string>('');
  tech = input<string>('');
  description = input<string>('');
  image = input<string>('');
  github = input<string>('');
  live = input<string>('');
  reverse = input<boolean>(false);
} */

import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  id = input<string>('');
  title = input<string>('');
  tech = input<string>('');
  description = input<string>('');
  image = input<string>('');
  github = input<string>('');
  live = input<string>('');
  reverse = input<boolean>(false);
}
