import { Component } from '@angular/core';
import { Home } from '../../../features/home/home';

@Component({
  selector: 'app-main-layout',
  imports: [Home],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
