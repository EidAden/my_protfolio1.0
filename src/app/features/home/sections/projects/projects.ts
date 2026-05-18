import { Component } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, TranslocoPipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
    {
      id: 'join-card',
      title: 'Join',
      tech: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'projectsDes.joinDescription',

      image: 'images/projects/join.png',
      github: 'https://github.com/your-link',
      live: 'https://your-live-link',
      reverse: false,
    },
    {
      id: 'pollo-card',
      title: 'Pollo Loco',
      tech: 'JavaScript | HTML | CSS',
      description: 'projectsDes.polloDescription',
      image: 'images/projects/pollo.png',
      github: 'https://github.com/your-link',
      live: 'https://your-live-link',
      reverse: true,
    },
    {
      id: 'bubble-card',
      title: 'DA Bubble',
      tech: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'projectsDes.bubbleDescription',
      image: 'images/projects/bubble.png',
      github: 'https://github.com/your-link',
      live: 'https://your-live-link',
      reverse: false,
    },
    {
      id: 'pokedex-card',
      title: 'Pokédex',
      tech: 'JavaScript | HTML | CSS | API',
      description: 'projectsDes.pokedexDescription',
      image: 'images/projects/pokedex.png',
      github: 'https://github.com/your-link',
      live: 'https://your-live-link',
      reverse: true,
    },
  ];
}
