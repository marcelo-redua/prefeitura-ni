import { Component, CUSTOM_ELEMENTS_SCHEMA, Renderer2 } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { HighlightTextComponent } from './components/highlight-text/highlight-text.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LiveChatComponent } from "./components/live-chat/live-chat.component";
import { TitleService } from './services/title.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HighlightTextComponent, 
    FooterComponent, 
    HomeComponent, 
    BreadcrumbComponent, 
    LatestNewsComponent, 
    HeaderComponent, 
    CarouselComponent, 
    LiveChatComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  siteMapData = [
    // O conteúdo de siteMapData permanece o mesmo
  ];

  constructor(
    private titleService: TitleService, 
    private renderer: Renderer2,
    private router: Router
  ) {
    // Subscrição para detectar a navegação e rolar para o topo
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }

  toggleContrast() {
    const body = document.body;
    if (body.classList.contains('dark')) {
      this.renderer.removeClass(body, 'dark');
    } else {
      this.renderer.addClass(body, 'dark');
    }
  }
}
