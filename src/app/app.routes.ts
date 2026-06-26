import { Routes } from '@angular/router';
import { MainLayout } from './core/layout/main-layout/main-layout';
import { Home } from './features/home/home';
import { Imprint } from './core/layout/imprint/imprint';
import { Privacy } from './core/layout/privacy/privacy';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home },
      { path: 'imprint', component: Imprint },
      { path: 'privacy', component: Privacy },
    ],
  },
  {
    path: '**',
    component: NotFound,
  },
];
