import { Component } from '@angular/core';
import { HighlightTextComponent } from "../../components/highlight-text/highlight-text.component";
import { NewsFeedComponent } from "../../components/news-feed/news-feed.component";
import { NewsGridComponent } from "../../components/news-grid/news-grid.component";
import { PaginationComponent } from "../../components/pagination/pagination.component";

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [HighlightTextComponent, NewsFeedComponent, NewsGridComponent, PaginationComponent],
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {
  highlightedNews = {
    image: '/assets/noticia1.jpg',
    title: 'Nova Iguaçu capacita Guarda Municipal para atuação em situações de desastres',
    link: '/noticia-destaque',
  };

  otherNewsList = [
    {
      image: '/assets/empreende.jpg',
      title: 'Empreendedorismo feminino em alta: CRAS Vila Iguassú oferece oficinas que proporcionam geração de renda',
      link: '/noticia-1',
    },
    {
      image: '/assets/prematuros.jpg',
      title: 'Prematuros do Hospital Iguassú são fantasiados de super-heróis em homenagem a luta pela vida',
      link: '/noticia-2',
    },
  ];
}
