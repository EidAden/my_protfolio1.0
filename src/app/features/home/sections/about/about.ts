import { Component } from '@angular/core';
import { Buttons } from '../../../../shared/ui/buttons/buttons';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-about',
  imports: [Buttons, TranslocoPipe],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
