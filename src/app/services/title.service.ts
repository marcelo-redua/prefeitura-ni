import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private siteSuffix = 'Prefeitura Municipal de Nova Iguaçu'; // Sufixo padrão

  constructor(private titleService: Title, private router: Router) {
    // Escuta as mudanças de rota
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const title = this.getPageTitle(this.router.url);
        document.title = title; // Define o título da página
      });
  }

  // Mapeia as URLs para os títulos das páginas
  private getPageTitle(url: string): string {
    // Verifica se a URL é a raiz, retornando apenas o nome da prefeitura
    if (url === '/') {
      return 'Prefeitura Municipal de Nova Iguaçu';
    }
    
    // Para outras rotas, retorna o título apropriado com o prefixo
    if (url.includes('secretarias')) {
      return 'Secretarias - ' + this.siteSuffix;
    } 
    if (url.includes('diario')) {
      return 'Diário Oficial - ' + this.siteSuffix;
    } 
    if (url.includes('ouvidoria')) {
      return 'Ouvidoria - ' + this.siteSuffix;
    } 
    if (url.includes('fale-conosco')) {
      return 'Fale Conosco - ' + this.siteSuffix;
    } 
    if (url.includes('noticias')) {
      return 'Notícias - ' + this.siteSuffix;
    }
  
    // Retorna um título padrão se não corresponder a nenhuma rota específica
    return this.siteSuffix;
  }
}
