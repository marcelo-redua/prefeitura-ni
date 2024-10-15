import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common'; // Importação necessária

@Component({
  selector: 'app-accessibility',
  standalone: true,
  templateUrl: './accessibility.component.html',
  styleUrls: ['./accessibility.component.css'],
  imports: [CommonModule, RouterModule], // Adicionando o CommonModule
})
export class AccessibilityComponent {
  isSitemapRoute = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isSitemapRoute = this.router.url.includes('sitemap');
      });
  }
}
