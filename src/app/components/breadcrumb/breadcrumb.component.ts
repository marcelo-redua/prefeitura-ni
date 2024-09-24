import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, map } from 'rxjs/operators';

interface Breadcrumb {
  label: string;
  url: string[];
}

@Component({
  selector: 'app-breadcrumb',
  standalone: true,  // Marca o componente como standalone
  imports: [RouterModule, CommonModule], // Importa os módulos necessários
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.buildBreadcrumbs(this.activatedRoute.root))
    ).subscribe(breadcrumbs => {
      this.breadcrumbs = breadcrumbs;
    });
  }

  private buildBreadcrumbs(route: ActivatedRoute): Breadcrumb[] {
    const breadcrumb: Breadcrumb = {
      label: route.snapshot.data['breadcrumb'],
      url: route.snapshot.url.map(segment => segment.path)
    };
    const url = breadcrumb.url.join('/');
    return (route.parent ? this.buildBreadcrumbs(route.parent) : [])
      .concat(breadcrumb);
  }
}