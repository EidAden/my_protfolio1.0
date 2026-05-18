import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-skills',
  imports: [TranslocoPipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {}
