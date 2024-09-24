// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SiteMapComponent } from './pages/site-map/site-map.component';

export const routes: Routes = [
  // Note que a constante é chamada 'routes'
  { path: '', component: HomeComponent, data: { breadcrumb: 'Home' } },
  { path: '**', component: NotFoundComponent },
  { path: 'sitemap', component: SiteMapComponent, data: { breadcrumb: 'Mapa do site' } },
];
