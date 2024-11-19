import { Component } from '@angular/core';
import { HighlightTextComponent } from '../../components/highlight-text/highlight-text.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { LinkCardComponent } from '../../components/link-card/link-card.component';
import { CardSeiComponent } from '../../components/card-sei/card-sei.component';

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
        'Para apoiar os servidores na utilização do SEI, foram disponibilizados alguns materiais de orientação, como <strong class="text-orange font-bold">cursos</strong>, <strong class="text-orange font-bold">seminários</strong>, <strong class="text-orange font-bold">manuais</strong> e <strong class="text-orange font-bold">testes</strong> para serem realizados em um ambiente de treinamento.',
    },
    {
      title: 'Quem pode usar o SEI?',
      description:
        'Todos os funcionários que trabalham com processos administrativos: <strong class="text-orange font-bold">Técnicos de processos</strong>, <strong class="text-orange font-bold">Secretários</strong>, <strong class="text-orange font-bold">Fiscais</strong>, <strong class="text-orange font-bold">Gestores</strong>, <strong class="text-orange font-bold">Assessores</strong> e a <strong class="text-orange font-bold">População</strong>.',
    },
    {
      title: 'Quais os benefícios do SEI?',
      description:
        '<ul  class="space-y-2"><li class="flex items-center text-blue-dark font-bold"><img src="assets/icon/check.svg" alt="Check icon" class="w-5 h-5 mr-2 text-orange" />Fácil abertura de processos;</li><li class="flex items-center text-blue-dark font-bold">Processos online descomplicados;</li><li class="flex items-center text-blue-dark font-bold">Integridade das informações (assinatura, histórico e criptografia);</li><li class="flex items-center text-blue-dark font-bold">Assinatura eletrônica.</li></ul>',
    },
    {
      title: 'O que pode ser feito dentro do SEI?',
      description:
        'Controle de processos;<br>Gestão de documentos;<br>Tramitação entre os setores;<br>Assinatura eletrônica;<br>Controle de prazos.',
    },
  ];
}
