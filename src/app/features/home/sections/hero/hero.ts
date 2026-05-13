import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { UiService } from '../../../../core/services/ui.service';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, TranslocoPipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  @Input() menuOpen = false;

  constructor(public ui: UiService) {}
}
