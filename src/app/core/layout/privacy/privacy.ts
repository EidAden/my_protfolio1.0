import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-privacy',
  imports: [TranslocoPipe],
  templateUrl: './privacy.html',
  styleUrl: './privacy.scss',
})
export class Privacy {}
