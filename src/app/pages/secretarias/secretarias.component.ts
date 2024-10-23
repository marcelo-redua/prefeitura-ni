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
        'Promover a modernização administrativa através da introdução de novas tecnologias e processos de gestão; Responder pela implantação e execução das políticas municipais nas áreas de Administração e Gestão de Pessoas no âmbito da Prefeitura;',
      secretaryImage: '../../../assets/img/paulo-semat.jpeg',
      secretaryName: 'Paulo Sérgio da Silva Monteiro',
      secretaryGender: 'Secretário',
      secretaryIcon: '../../../assets/secretarias/semat.svg',
      linkUrl: '/secretarias/semat',
    },
    {
      title: 'Secretaria Municipal de Agricultura e Meio Ambiente',
      description:
        'Elaborar, coordenar, executar e fiscalizar, direta ou indiretamente, a Política Ambiental do Município de Nova Iguaçu; Estabelecer as normas de proteção ambiental referente às atividades que interfiram ou que possam interferir na qualidade do meio ambiente;',
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
        'Promover a modernização administrativa através da introdução de novas tecnologias...',
      secretaryImage: '../../../assets/img/rafael-semconger.jpg',
      secretaryName: 'Rafael Martins Gomes',
      secretaryGender: 'Secretário',
      secretaryIcon: '../../../assets/secretarias/semconger.svg',
      linkUrl: '/secretarias/semconger',
    },
    {
      title: 'Secretaria Municipal de Cultura',
      description:
        'Promover a modernização administrativa através da introdução de novas tecnologias',
      secretaryImage: '../../../assets/img/marcus-semcult.jpeg',
      secretaryName: 'Marcus Monteiro',
      secretaryGender: 'Secretário',
      secretaryIcon: '../../../assets/secretarias/semcult.svg',
      linkUrl: '/secretarias/semcult.svg',
    },
    {
      title: 'Secretaria Municipal de Defesa Civil',
      description:
        'Promover a modernização administrativa através da introdução de novas tecnologias...',
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
        'Promover a modernização administrativa através da introdução de novas tecnologias...',
      secretaryImage: '../../../assets/img/semfoto.png',
      secretaryName: 'Ana Paula Coelho Lopes',
      secretaryGender: 'Secretária',
      secretaryIcon: '../../../assets/secretarias/semdettur.svg',
      linkUrl: '/secretarias/semdettur',
    },
    {
      title: 'Secretaria Municipal de Desenvolvimento Urbano',
      description:
        'Promover a modernização administrativa através da introdução de novas tecnologias...',
      secretaryImage: '../../../assets/img/jose-semdur.jpeg',
      secretaryName: 'José Reginaldo Bastos da Cruz',
      secretaryGender: 'Secretário',
      secretaryIcon: '../../../assets/secretarias/semdur.svg',
      linkUrl: '/secretarias/semdur',
    },
    {
      title: 'Secretaria Municipal de Economia, Planejamento e Finanças',
      description:
        'Promover a modernização administrativa através da introdução de novas tecnologias...',
      secretaryImage: '../../../assets/img/fabiano-semef.jpeg',
      secretaryName: 'Fabiano Muniz da Silva',
      secretaryGender: 'Secretário',
      secretaryIcon: '../../../assets/secretarias/semef.svg',
      linkUrl: '/secretarias/semef',
    },
    {
      title: 'Secretaria Municipal de Educação',
      description:
        'Promover a modernização administrativa através da introdução de novas tecnologias...',
      secretaryImage: '../../../assets/img/maria-semed.jpg',
      secretaryName: 'Maria Virgínia Andrade Rocha',
      secretaryGender: 'Secretária',
      secretaryIcon: '../../../assets/secretarias/semed.svg',
      linkUrl: '/secretarias/semed',
    },
    {
      title: 'Secretaria Municipal de Esporte e Lazer',
      description:
        'Promover a modernização administrativa através da introdução de novas tecnologias...',
      secretaryImage: '../../../assets/img/leandro-semel.jpeg',
      secretaryName: 'Leandro Silva Wanderley',
      secretaryGender: 'Secretário',
      secretaryIcon: '/../../../assets/secretarias/semel.svg',
      linkUrl: '/secretarias/semel',
    },
    {
      title: 'Secretaria Municipal de Governo',
      description:
        'Promover a modernização administrativa através da introdução de novas tecnologias...',
      secretaryImage: '../../../assets/img/semfoto.png',
      secretaryName: 'Rodrigo Jorge da Costa Ferraz',
      secretaryGender: 'Secretário',
      secretaryIcon: '../../../assets/secretarias/semug.svg',
      linkUrl: '/secretarias/semug',
    },
    {
      title: 'Secretaria Municipal de Infraestrutura',
      description:
        'Promover a modernização administrativa através da introdução de novas tecnologias...',
      secretaryImage: '../../../assets/img/semfoto.png',
      secretaryName: 'Cleide Moreira',
      secretaryGender: 'Secretária',
      secretaryIcon: '../../../assets/secretarias/semif.svg',
      linkUrl: '/secretarias/semif',
    },
    {
      title: 'Secretaria Municipal de Saúde',
      description:
        'Promover a modernização administrativa através da introdução de novas tecnologias...',
      secretaryImage: '../../../assets/img/luiz-semus.jpeg',
      secretaryName: 'Luiz Carlos Nobre Cavalcanti',
      secretaryGender: 'Secretário',
      secretaryIcon: '../../../assets/secretarias/semus.svg',
      linkUrl: '/secretarias/semus',
    },
    {
      title: 'Secretaria Municipal de Segurança Pública',
      description:
        'Promover a modernização administrativa através da introdução de novas tecnologias...',
      secretaryImage: '../../../assets/img/fernando-semseg.jpeg',
      secretaryName: 'Fernando Vieira Bastos',
      secretaryGender: 'Secretário',
      secretaryIcon: '../../../assets/secretarias/semseg.svg',
      linkUrl: '/secretarias/semseg',
    },
    {
      title: 'Secretaria Municipal de Serviços Públicos',
      description:
        'Promover a modernização administrativa através da introdução de novas tecnologias...',
      secretaryImage: '../../../assets/img/alexandre-semserp.jpg',
      secretaryName: 'Alexandre Ferreira da Silveira',
      secretaryGender: 'Secretário',
      secretaryIcon: '../../../assets/secretarias/semserp.svg',
      linkUrl: '/secretarias/semserp',
    },
    {
      title: 'Secretaria Municipal de Transporte, Trânsito e Mobilidade Urbana',
      description:
        'Promover a modernização administrativa através da introdução de novas tecnologias...',
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
