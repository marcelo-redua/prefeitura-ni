import { Component } from '@angular/core';
import { Router, RouterLink, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sitemap',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h1>Sitemap</h1>
    <ul>
      <li *ngFor="let route of filteredRoutes">
        <a [routerLink]="route.path">{{ route.title || route.path }}</a>
      </li>
    </ul>
  `
})
export class SiteMapComponent {
  filteredRoutes: Routes = [];

  constructor(private router: Router) {
    // Obtém todas as rotas
    const allRoutes = this.router.config;

    // Filtra apenas as rotas que têm um caminho (path) visível e são acessíveis
    this.filteredRoutes = allRoutes.filter(route => route.path && route.title);
  }
}
