import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class SearchComponent implements OnInit {
  searchQuery: string = '';
  searchResults: { title: string; description: string; path: string }[] = []; // Resultados da pesquisa

  // Defina as páginas do site que você deseja pesquisar
  private pages = [
    {
      title: 'Secretaria de Saúde',
      description: 'Informações sobre a saúde pública.',
      path: '/secretarias/semus',
    },
    {
      title: 'Secretaria de Educação',
      description: 'Detalhes sobre a educação no município.',
      path: '/secretarias/semed',
    },
    {
      title: 'Órgão Municipal de Trânsito',
      description: 'Informações sobre o trânsito e transporte.',
      path: '/orgaos-municipais/transito',
    },
    {
      title: 'Notícias da Cidade',
      description: 'Últimas notícias sobre a cidade.',
      path: '/noticias',
    },
    {
      title: 'Serviço de Atendimento ao Cidadão',
      description: 'Como solicitar serviços municipais.',
      path: '/servicos',
    },
    // Adicione mais páginas conforme necessário
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Pega o termo de pesquisa passado pela URL
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['query'] || '';
      this.searchResults = this.filterResults(this.searchQuery);
    });
  }

  // Filtra as páginas com base na pesquisa
  filterResults(
    query: string
  ): { title: string; description: string; path: string }[] {
    if (!query) {
      return [];
    }

    return this.pages.filter(
      (page) =>
        page.title.toLowerCase().includes(query.toLowerCase()) ||
        page.description.toLowerCase().includes(query.toLowerCase())
    );
  }
}
