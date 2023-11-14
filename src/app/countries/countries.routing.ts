import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'by-capital',
    loadComponent: () => import('./pages/by-capital-page/by-capital-page.component').then(m => m.ByCapitalPageComponent),
  },
  {
    path: 'by-country',
    loadComponent: () => import('./pages/by-country-page/by-country-page.component').then(m => m.ByCountryPageComponent),
  },
  {
    path: 'by-region',
    loadComponent: () => import('./pages/by-region-page/by-region-page.component').then(m => m.ByRegionPageComponent),
  },
  {
    path: 'by/:id',
    loadComponent: () => import('./pages/country-page/country-page.component').then(m => m.CountryPageComponent),
  },
  { path: '**', redirectTo: 'by-capital'},
];
