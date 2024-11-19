import { Component } from '@angular/core';
import { HighlightTextComponent } from "../../components/highlight-text/highlight-text.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { FaqComponent } from "../../components/faq/faq.component";
import { LinkCardComponent } from "../../components/link-card/link-card.component";
import { CardSeiComponent } from "../../components/card-sei/card-sei.component";

@Component({
  selector: 'app-sei',
  standalone: true,
  imports: [
    HighlightTextComponent,
    BannerComponent,
    FaqComponent,
    LinkCardComponent,
    CardSeiComponent, // Adicionado o CardSeiComponent
  ],
  templateUrl: './sei.component.html',
  styleUrls: ['./sei.component.css'], // Corrigido para "styleUrls" (plural)
})
export class SeiComponent {
  buttons = [
    {
      icon: 'assets/icons/sei/sei.svg',
      title: 'ACESSAR O SEI AQUI!',
      link: 'https://sei.novaiguacu.rj.gov.br/sip/login.php?sigla_orgao_sistema=PMNI&sigla_sistema=SEI',
    },
    {
      icon: 'assets/icons/sei/treinamento.svg',
      title: 'TREINAMENTO',
      link: 'https://treinamentosei.novaiguacu.rj.gov.br/sip/login.php?sigla_orgao_sistema=PMNI&sigla_sistema=SEI',
    },
    {
      icon: 'assets/icons/sei/consulta.svg',
      title: 'CONSULTA PÚBLICA DE PROCESSOS',
      link: 'https://consulta-sei.novaiguacu.rj.gov.br/',
    },
  ];

  cardSeiItems = [
    {
      title: 'Como faço para acessar o sistema?',
      description:
        'Para apoiar os servidores na utilização do SEI, foram disponibilizados alguns materiais de orientação, como cursos, seminários, manuais e testes para serem realizados em um ambiente de treinamento.',
    },
    {
      title: 'Quem pode usar o SEI?',
      description:
        'Todos os funcionários que trabalham com processos administrativos: Técnicos de processos, Secretários, Fiscais, Gestores, Assessores e a População.',
    },
    {
      title: 'Quais os benefícios do SEI?',
      description: 'Fácil abertura de processos;',
    },
    {
      title: 'O que pode ser feito dentro do SEI?',
      description: 'Controle de processos;',
    },
  ];
}
