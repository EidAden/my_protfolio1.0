import { Component } from '@angular/core';
import { Buttons } from '../../../shared/ui/buttons/buttons';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-imprint',
  imports: [TranslocoPipe],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})
export class Imprint {
  isMenuOpen = false;
}
