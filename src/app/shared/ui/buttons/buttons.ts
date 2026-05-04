import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [],
  templateUrl: './buttons.html',
  styleUrl: './buttons.scss',
})
export class Buttons {
  @Input() width_btn: string = '130px';
  @Input() font_size: string = '16px';
  @Input() font_family: string = 'Poppins';
  @Input() font_weight: string = '400';
  @Input() padding: string = '10px 30px';
  @Input() text: string = 'Github';
  @Input() color_text: string = '#5988FF';
  @Input() disabled: boolean = false;
  @Input() height: string = '58px';
  @Input() background: string = '#ffffff';
  @Input() border: string = '2px solid #5988FF';
}
