import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importar o RouterModule

@Component({
  selector: 'app-feedback-section',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './feedback-section.component.html',
  styleUrl: './feedback-section.component.css'
})
export class FeedbackSectionComponent {
  feedbackItems = [
    {
      iconSrc: 'assets/icons/ouvidoria/reclamacao.svg',
      title: 'Reclamação',
      description: 'para manifestar sua insatisfação ou reclamação sobre nossos serviços.',
      link: '/fale-conosco'
    },
    {
      iconSrc: 'assets/icons/ouvidoria/elogio.svg',
      title: 'Elogio',
      description: 'para manifestar sua satisfação sobre nossos serviços e atendimentos.',
      link: '/fale-conosco'
    },
    {
      iconSrc: 'assets/icons/ouvidoria/solicitacao.svg',
      title: 'Solicitação',
      description: 'para solicitar por parte da Ouvidoria a adoção de providências.',
      link: '/fale-conosco'
    },
    {
      iconSrc: 'assets/icons/ouvidoria/sugestao.svg',
      title: 'Sugestão',
      description: 'para enviar uma sugestão, ideia ou proposta de melhoria.',
      link: '/fale-conosco'
    },
    {
      iconSrc: 'assets/icons/ouvidoria/denuncia.svg',
      title: 'Denúncia',
      description: 'para relatar uma violação, uma irregularidade ou ato ilícito.',
      link: '/fale-conosco'
    },
    {
      iconSrc: 'assets/icons/ouvidoria/fale-conosco.svg',
      title: 'Fale conosco',
      description: 'para ter acesso a todos nossos canais de atendimento.',
      link: '/fale-conosco'
    }
  ];
}
