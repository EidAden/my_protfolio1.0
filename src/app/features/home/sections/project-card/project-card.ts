import { Component, Input, input } from '@angular/core';
import { Buttons } from '../../../../shared/ui/buttons/buttons';

@Component({
  selector: 'app-project-card',
  imports: [Buttons],
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
  border: string = ' 2px solid #0043f0';
}
