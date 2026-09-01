import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-about',
  imports: [TranslocoPipe],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
