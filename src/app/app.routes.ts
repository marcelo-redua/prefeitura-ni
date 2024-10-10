// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SiteMapComponent } from './pages/site-map/site-map.component';
import { AccessibilityComponent } from './pages/accessibility/accessibility.component';
import { OuvidoriaComponent } from './pages/ouvidoria/ouvidoria.component';
import { FaleConoscoComponent } from './pages/fale-conosco/fale-conosco.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { breadcrumb: 'Home' } },
  { path: 'sitemap', component: SiteMapComponent, data: { breadcrumb: 'Mapa do site' } },
  { path: 'acessibilidade', component: AccessibilityComponent },
  { path: 'ouvidoria', component: OuvidoriaComponent },
  { path: 'fale-conosco', component: FaleConoscoComponent },
  { path: '**', component: NotFoundComponent },
];
