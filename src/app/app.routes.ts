import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./template/pages/principal-template/principal-template.component').then(m => m.PrincipalTemplateComponent),
    children: [
      { path: '', redirectTo: 'countries', pathMatch: 'full' },
      { path: 'countries', loadChildren: () => import('./countries/countries.routing').then(m => m.routes) },
      { path: '**', redirectTo: 'countries'},
    ],
  },
  { path: '**', redirectTo: '' },
];
