import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightTextComponent } from './components/highlight-text/highlight-text.component'; // Importar o componente
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LiveChatComponent } from "./components/live-chat/live-chat.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HighlightTextComponent, FooterComponent, HomeComponent, BreadcrumbComponent, LatestNewsComponent, HeaderComponent, CarouselComponent, LiveChatComponent], // Adicionar o componente nos imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  siteMapData = [
    {
      title: 'Início',
      links: [{ title: 'Página Inicial', href: '/' }],
    },
    {
      title: 'O Município',
      links: [
        { title: 'História de Nova Iguaçu', href: '/secretarias/cidade' },
        { title: 'Prefeito', href: '/secretarias/prefeito' },
      ],
    },
    {
      title: 'Serviços',
      links: [
        { title: 'Cidadão', href: '/' },
        { title: 'Empresa', href: '/' },
        { title: 'Servidor', href: '/' },
      ],
    },
    {
      title: 'Estrutura Organizacional',
      links: [{ title: 'Secretarias', href: '/secretarias' }],
      subsections: [
        {
          links: [
            { title: 'Secretaria Municipal de Administração e Tecnologia', href: '/secretarias/semat' },
            { title: 'Secretaria Municipal de Agricultura e Meio Ambiente', href: '/secretarias/semam' },
            { title: 'Secretaria Municipal de Assistência Social', href: '/secretarias/semas' },
            // Adicionar outros links conforme necessário
          ],
        },
      ],
    },
    {
      title: 'Publicações Oficiais',
      links: [{ title: 'Diário Oficial', href: '/diario' }],
      subsections: [
        {
          title: 'Licitações',
          links: [
            { title: 'Licitantes e/ou contratados sancionados', href: '/' },
            { title: 'Chamada Pública', href: '/' },
            // Adicionar outros links conforme necessário
          ],
        },
      ],
    },
    {
      title: 'Informativos',
      links: [
        { title: 'Notícias', href: '/' },
        { title: 'Eventos', href: '/' },
      ],
    },
    {
      title: 'Transparência',
      links: [
        { title: 'Acesso à Informação', href: '/' },
        { title: 'Carta de Serviços', href: '/' },
      ],
    },
    {
      title: 'Contato',
      links: [
        { title: 'Telefones', href: '/contatos/telefones-e-enderecos' },
        { title: 'Fale Conosco', href: '/contatos/fale-conosco' },
        { title: 'Ouvidoria', href: '/contatos/ouvidoria' },
      ],
    },
  ];
}

