import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Array<{ name: string, url: string }> = [];
  isHomePage = false; // Propriedade para verificar se estamos na rota inicial

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.buildBreadcrumbs(this.activatedRoute.root);
        this.isHomePage = this.router.url === '/'; // Verifica se a URL atual é a página inicial

        // Adiciona "Início" ao início do breadcrumb
        this.breadcrumbs.unshift({ name: 'Início', url: '/' });
      });
  }

  buildBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Array<{ name: string, url: string }> = []): Array<{ name: string, url: string }> {
    const children = route.children;

    // Continue apenas se a rota tiver filhos
    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL) {
        // Constrói a URL completa para o breadcrumb atual
        url += `/${routeURL}`;
      }

      // Obtém o rótulo do breadcrumb a partir dos dados da rota
      const label = child.snapshot.data['breadcrumb'];
      if (label) {
        breadcrumbs.push({ name: label, url });
      }

      // Chamada recursiva para processar as rotas filhas
      return this.buildBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
