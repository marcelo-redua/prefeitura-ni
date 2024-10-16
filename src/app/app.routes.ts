// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SiteMapComponent } from './pages/site-map/site-map.component';
import { AccessibilityComponent } from './pages/accessibility/accessibility.component';
import { OuvidoriaComponent } from './pages/ouvidoria/ouvidoria.component';
import { FaleConoscoComponent } from './pages/fale-conosco/fale-conosco.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { DiarioComponent } from './pages/diario/diario.component';
import { SecretariasComponent } from './pages/secretarias/secretarias.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { breadcrumb: 'Home' } },
  {
    path: 'acessibilidade',
    component: AccessibilityComponent,
    data: { breadcrumb: 'Acessibilidade' },
    children: [
      {
        path: 'sitemap',
        component: SiteMapComponent,
        data: { breadcrumb: 'Mapa do site' },
      },
    ],
  },
  {
    path: 'ouvidoria',
    component: OuvidoriaComponent,
    data: { breadcrumb: 'Ouvidoria' },
  },
  {
    path: 'fale-conosco',
    component: FaleConoscoComponent,
    data: { breadcrumb: 'Fale Conosco' },
  },
  {
    path: 'noticias', // Adicionando a rota de notícias
    component: NoticiasComponent,
    data: { breadcrumb: 'Notícias' },
  },
  {
    path: 'diario', // Adicionando a rota de notícias
    component: DiarioComponent,
    data: { breadcrumb: 'Diário Oficial' },
  },
  {
    path: 'secretarias', // Adicionando a rota de notícias
    component: SecretariasComponent,
    data: { breadcrumb: 'Secretarias' },
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { breadcrumb: 'Página Não Encontrada' },
  },
];
