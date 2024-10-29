import { Component } from '@angular/core';
import { Router, RouterLink, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HighlightTextComponent } from "../../components/highlight-text/highlight-text.component";

@Component({
  selector: 'app-sitemap',
  standalone: true,
  imports: [CommonModule, RouterLink, HighlightTextComponent],
  templateUrl: './site-map.component.html', // Certifique-se de que o caminho do HTML está correto
  styleUrls: ['./site-map.component.css']})
export class SiteMapComponent {
  filteredRoutes: Routes = [];

  constructor(private router: Router) {
    // Obtém todas as rotas
    const allRoutes = this.router.config;

    // Filtra apenas as rotas que têm um caminho (path) visível e são acessíveis
    this.filteredRoutes = allRoutes.filter(route => route.path && route.title);
  }
}
