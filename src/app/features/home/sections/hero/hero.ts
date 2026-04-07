import { Component, Input } from '@angular/core';
import { Header } from '../../../../core/layout/header/header';
import { UiService } from '../../../../core/services/ui.service';

import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  @Input() menuOpen = false;
  constructor(public ui: UiService) {}
}
