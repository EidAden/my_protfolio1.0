import { Component } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
    {
      id: 'join-card',
      title: 'Join',
      tech: 'Angular | TypeScript | HTML | CSS | Firebase',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image: 'images/projects/join.png',
      github: 'https://github.com/your-link',
      live: 'https://your-live-link',
      reverse: false,
    },
    {
      id: 'pollo-card',
      title: 'Pollo Loco',
      tech: 'JavaScript | HTML | CSS',
      description:
        'A small jump-and-run game with object-oriented JavaScript. Fight enemies, collect coins and bottles, and defeat the boss.',
      image: 'images/projects/pollo.png',
      github: 'https://github.com/your-link',
      live: 'https://your-live-link',
      reverse: true,
    },
    {
      id: 'bubble-card',
      title: 'DA Bubble',
      tech: 'Angular | TypeScript | HTML | CSS | Firebase',
      description:
        'A chat application for team communication with channels, direct messages, and a clean responsive interface.',
      image: 'images/projects/bubble.png',
      github: 'https://github.com/your-link',
      live: 'https://your-live-link',
      reverse: false,
    },
    {
      id: 'pokedex-card',
      title: 'Pokédex',
      tech: 'JavaScript | HTML | CSS | API',
      description:
        'A Pokédex app that loads Pokémon data from an API and displays details like type, stats, and evolution.',
      image: 'images/projects/pokedex.png',
      github: 'https://github.com/your-link',
      live: 'https://your-live-link',
      reverse: true,
    },
  ];
}
