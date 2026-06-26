import { Component } from '@angular/core';

import { TranslocoPipe } from '@jsverse/transloco';
import { Buttons } from '../../../../shared/ui/buttons/buttons';

@Component({
  selector: 'app-projects',
  imports: [Buttons, TranslocoPipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {}
