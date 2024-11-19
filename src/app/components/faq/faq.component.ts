import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [CommonModule], // Importa o CommonModule para usar o *ngFor
  template: `
    <div class="mx-auto my-8">
      <div *ngFor="let faq of faqData" class="border-b-2 border-gray">
        <button
          (click)="toggleOpen(faq)"
          class="w-full text-left p-4 flex justify-between items-center"
        >
          <span class="text-lg font-semibold text-blue-dark">
            {{ faq.question }}
          </span>
          <svg
          width="20"
            class=" text-orange transform"
            [attr.class]="faq.isOpen ? 'rotate-180' : 'rotate-0'"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
            class="text-orange"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div *ngIf="faq.isOpen" class="p-4 text-blue-dark">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  `,
  standalone: true,
})
export class FaqComponent {
  faqData = [
    {
      question: 'Quando o SEI chegará ao meu setor da secretaria?',
      answer:
        'A data de implantação do SEI em cada setor será comunicada conforme o cronograma oficial.',
      isOpen: false,
    },
    {
      question: 'Quando vou receber meu usuário e senha?',
      answer:
        'Os usuários e senhas serão enviados após a conclusão do treinamento e cadastramento no sistema.',
      isOpen: false,
    },
    {
      question: 'Como desfazer uma tramitação?',
      answer:
        'Não é possível desfazer uma tramitação dentro do SEI! Você precisará ligar para o setor e pedir que envie o processo de volta ao seu setor.',
      isOpen: false,
    },
    {
      question: 'Os processos podem ser editados no SEI?',
      answer:
        'Os usuários e senhas serão enviados após a conclusão do treinamento e cadastramento no sistema.',
      isOpen: false,
    },
    {
      question: 'No SEI existem documentos avulsos?',
      answer:
        'Os usuários e senhas serão enviados após a conclusão do treinamento e cadastramento no sistema.',
      isOpen: false,
    },
    {
      question: 'Como funciona o Retorno Programado de um processo?',
      answer:
        'Os usuários e senhas serão enviados após a conclusão do treinamento e cadastramento no sistema.',
      isOpen: false,
    },
  ];

  toggleOpen(faq: any) {
    faq.isOpen = !faq.isOpen;
  }
}
