import { Component } from '@angular/core';
import { Buttons } from '../../../shared/ui/buttons/buttons';

@Component({
  selector: 'app-imprint',
  imports: [Buttons],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})
export class Imprint {
  isMenuOpen = false;
}
