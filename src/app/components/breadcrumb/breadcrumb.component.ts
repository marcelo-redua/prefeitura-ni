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

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.buildBreadcrumbs(this.activatedRoute.root);
      });
  }

  buildBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Array<{ name: string, url: string }> = []): Array<{ name: string, url: string }> {
    const children = route.children;

    // Continue only if the route has children
    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL) {
        // Build the complete URL for the current breadcrumb
        url += `/${routeURL}`;
      }

      // Get the breadcrumb label from the route's data
      const label = child.snapshot.data['breadcrumb'];
      if (label) {
        breadcrumbs.push({ name: label, url });
      }

      // Recursive call to process child routes
      return this.buildBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
