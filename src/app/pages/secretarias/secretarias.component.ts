import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HighlightTextComponent } from '../../components/highlight-text/highlight-text.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FilterSidebarComponent } from '../../components/filter-sidebar/filter-sidebar.component';
import { SecretaryCardComponent } from '../../components/secretary-card/secretary-card.component'; // Importa o SecretaryCard

@Component({
  selector: 'app-secretarias',
  standalone: true,
  imports: [
    HighlightTextComponent,
    PaginationComponent,
    RouterModule,
    CommonModule,
    FilterSidebarComponent,
    SecretaryCardComponent,
  ],
  templateUrl: './secretarias.component.html',
  styleUrls: ['./secretarias.component.css'],
})
export class SecretariasComponent {
setSelectedFilter(_t10: string) {
throw new Error('Method not implemented.');
}
  showContent = true; // Para controlar a exibição do conteúdo
  cardData = [
    {
      title: 'Secretaria Municipal de Administração e Tecnologia',
      description:
        'Promover a modernização administrativa através da introdução de novas tecnologias e processos de gestão;',
      secretaryImage: '../../../assets/img/paulo-semat.jpeg',
      secretaryName: 'Paulo Sérgio da Silva Monteiro',
      secretaryGender: 'Secretário',
      secretaryIcon: '../../../assets/secretarias/semat.svg',
      linkUrl: '/secretarias/semat',
    },
    {
      title: 'Secretaria Municipal de Agricultura e Meio Ambiente',
      description:
        'Elaborar, coordenar, executar e fiscalizar, direta ou indiretamente, a Política Ambiental do Município de Nova Iguaçu;',
      secretaryImage: '../../../assets/img/edgar-semam.jpg',
      secretaryName: 'Edgar Martins',
      secretaryGender: 'Secretário',
      secretaryIcon: '../../../assets/secretarias/semam.svg',
      linkUrl: '/secretarias/semam',
    },
    {
      title: 'Secretaria Municipal de Assistência Social',
      description:
        'Elaborar o Plano de Ação Municipal das Políticas de Assistência Social, da Mulher, da Segurança Alimentar e Nutricional, com a participação de órgãos governamentais e não-governamentais, submetendo-os à aprovação dos seus respectivos Conselhos;',
      secretaryImage: '../../../assets/img/elaine-semas.jpeg',
      secretaryName: 'Elaine Medeiros Fonseca da Silva',
      secretaryGender: 'Secretária',
      secretaryIcon: '../../../assets/secretarias/semas.svg',
      linkUrl: '/secretarias/semas',
    },
    {
      title: 'Secretaria Municipal de Controle Geral',
      description:
        'Analisar processos licitatórios, suas dispensas, inexigibilidades e demais afastamentos, chamamentos públicos, convênios e ajustes congêneres celebrados pelo Município, sob o aspecto formal e econômico, em atendimento às legislações existentes e às orientações, jurisprudências e deliberações dos Órgãos de Controle Externo;',
      secretaryImage: '../../../assets/img/rafael-semconger.jpg',
      secretaryName: 'Rafael Martins Gomes',
      secretaryGender: 'Secretário',
      secretaryIcon: '../../../assets/secretarias/semconger.svg',
      linkUrl: '/secretarias/semconger',
    },
    {
      title: 'Secretaria Municipal de Cultura',
      description:
        'Planejamento, organização, promoção, produção, articulação, coordenação, integração, execução e avaliação das políticas municipais relativas às áreas da cultura;',
      secretaryImage: '../../../assets/img/marcus-semcult.jpeg',
      secretaryName: 'Marcus Monteiro',
      secretaryGender: 'Secretário',
      secretaryIcon: '../../../assets/secretarias/semcult.svg',
      linkUrl: '/secretarias/semcult.svg',
    },
    {
      title: 'Secretaria Municipal de Defesa Civil',
      description:
        'Desenvolver cultura nacional de prevenção de desastres, destinada ao desenvolvimento da consciência nacional acerca dos riscos de desastre no País;',
      secretaryImage: '../../../assets/img/jorge-defesa-civil.jpeg',
      secretaryName: 'Jorge Ribeiro Lopes',
      secretaryGender: 'Secretário',
      secretaryIcon: '../../../assets/secretarias/smdc.svg',
      linkUrl: '/secretarias/smdc',
    },
    {
      title:
        'Secretaria Municipal de Desenvolvimento Econômico, Trabalho e Turismo',
      description:
        'A SEMDETTUR tem como missão melhorar o ambiente de negócios, tornando-o propício ao crescimento, à rentabilidade, ao fomento de novas tecnologias e à geração de novos empregos.',
      secretaryImage: '../../../assets/img/semfoto.png',
      secretaryName: 'Ana Paula Coelho Lopes',
      secretaryGender: 'Secretária',
      secretaryIcon: '../../../assets/secretarias/semdettur.svg',
      linkUrl: '/secretarias/semdettur',
    },
    {
      title: 'Secretaria Municipal de Desenvolvimento Urbano',
      description:
        'Dar suporte técnico em planejamento e projetos arquitetônicos e urbanísticos às metas do governo municipal;',
      secretaryImage: '../../../assets/img/jose-semdur.jpeg',
      secretaryName: 'José Reginaldo Bastos da Cruz',
      secretaryGender: 'Secretário',
      secretaryIcon: '../../../assets/secretarias/semdur.svg',
      linkUrl: '/secretarias/semdur',
    },
    {
      title: 'Secretaria Municipal de Economia, Planejamento e Finanças',
      description:
        'Executar as atividades relativas aos assuntos fiscais e financeiros do Município e integração com os demais entes; lançando, arrecadando e controlando os tributos e as receitas transferidas;',
      secretaryImage: '../../../assets/img/fabiano-semef.jpeg',
      secretaryName: 'Fabiano Muniz da Silva',
      secretaryGender: 'Secretário',
      secretaryIcon: '../../../assets/secretarias/semef.svg',
      linkUrl: '/secretarias/semef',
    },
    {
      title: 'Secretaria Municipal de Educação',
      description:
        'Efetivação de políticas que propiciem de forma democrática e inclusiva a todo individuo a gratuidade, o acesso e a permanência na Educação Básica;',
      secretaryImage: '../../../assets/img/maria-semed.jpg',
      secretaryName: 'Maria Virgínia Andrade Rocha',
      secretaryGender: 'Secretária',
      secretaryIcon: '../../../assets/secretarias/semed.svg',
      linkUrl: '/secretarias/semed',
    },
    {
      title: 'Secretaria Municipal de Esporte e Lazer',
      description:
        'Desenvolvimento e a implementação, no Município, de políticas públicas de esporte e lazer, com qualificação, inclusão das práticas e espaços de esporte e lazer, contribuindo para a melhoria da qualidade de vida;',
      secretaryImage: '../../../assets/img/leandro-semel.jpeg',
      secretaryName: 'Leandro Silva Wanderley',
      secretaryGender: 'Secretário',
      secretaryIcon: '/../../../assets/secretarias/semel.svg',
      linkUrl: '/secretarias/semel',
    },
    {
      title: 'Secretaria Municipal de Governo',
      description:
        'prestar assessoramento ao Prefeito, nos assuntos de natureza política e administrativa de governo;',
      secretaryImage: '../../../assets/img/semfoto.png',
      secretaryName: 'Rodrigo Jorge da Costa Ferraz',
      secretaryGender: 'Secretário',
      secretaryIcon: '../../../assets/secretarias/semug.svg',
      linkUrl: '/secretarias/semug',
    },
    {
      title: 'Secretaria Municipal de Infraestrutura',
      description:
        'Dar suporte técnico e administrativo as metas de governo;',
      secretaryImage: '../../../assets/img/semfoto.png',
      secretaryName: 'Cleide Moreira',
      secretaryGender: 'Secretária',
      secretaryIcon: '../../../assets/secretarias/semif.svg',
      linkUrl: '/secretarias/semif',
    },
    {
      title: 'Secretaria Municipal de Saúde',
      description:
        'Gestão, formulação e coordenação da política de saúde do município de acordo os instrumentos legais que dispõem sobre o Sistema Únicos de Saúde – SUS;',
      secretaryImage: '../../../assets/img/luiz-semus.jpeg',
      secretaryName: 'Luiz Carlos Nobre Cavalcanti',
      secretaryGender: 'Secretário',
      secretaryIcon: '../../../assets/secretarias/semus.svg',
      linkUrl: '/secretarias/semus',
    },
    {
      title: 'Secretaria Municipal de Segurança Pública',
      description:
        'Assessorar diretamente o Prefeito no desempenho de suas atribuições, atuando como órgão central do sistema de segurança e defesa;',
      secretaryImage: '../../../assets/img/fernando-semseg.jpeg',
      secretaryName: 'Fernando Vieira Bastos',
      secretaryGender: 'Secretário',
      secretaryIcon: '../../../assets/secretarias/semseg.svg',
      linkUrl: '/secretarias/semseg',
    },
    {
      title: 'Secretaria Municipal de Serviços Públicos',
      description:
        'Dragagem de Rios, Nivelamento (Patroll), Desobstrução de esgoto (Vacall), Serviços cemiteriais, Limpeza Manual',
      secretaryImage: '../../../assets/img/alexandre-semserp.jpg',
      secretaryName: 'Alexandre Ferreira da Silveira',
      secretaryGender: 'Secretário',
      secretaryIcon: '../../../assets/secretarias/semserp.svg',
      linkUrl: '/secretarias/semserp',
    },
    {
      title: 'Secretaria Municipal de Transporte, Trânsito e Mobilidade Urbana',
      description:
        'O planejamento, organização, articulação, coordenação e execução das políticas públicas municipais de transporte, trânsito e mobilidade urbana;',
      secretaryImage: '../../../assets/img/semfoto.png',
      secretaryName: 'Leonardo Bastos Callijão',
      secretaryGender: 'Secretário',
      secretaryIcon: '../../../assets/secretarias/semtmu.svg',
      linkUrl: '/secretarias/semtmu',
    },
  ];
searchQuery: any;
selectedFilter: any;
filteredData: any;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Verifica se estamos na rota base ou em uma subrota
        this.showContent = this.router.url === '/secretarias';
      });
  }
}
