import { Component } from '@angular/core';
import { HighlightTextComponent } from '../../components/highlight-text/highlight-text.component';
import { PhoneListComponent } from '../../components/phone-list/phone-list.component';
import { AccordionComponent } from '../../components/accordion/accordion.component';

@Component({
  selector: 'app-telefones',
  standalone: true,
  imports: [HighlightTextComponent, PhoneListComponent, AccordionComponent],
  templateUrl: './telefones.component.html',
  styleUrls: ['./telefones.component.css'],
})
export class TelefonesComponent {
  faqData = [
    {
      question: 'SEMAS – Secretaria Municipal de Assistência Social:',
      answer: '',
      isOpen: false,
    },
    {
      question: 'SEMCOGER – Secretaria Municipal de Controle Geral:',
      answer:
        '<strong class="text-blue-dark">Protocolo:</strong> <a href="tel:2137790950" class="hover:underline">3779-0950</a>',
      isOpen: false,
    },
    {
      question: 'SEMCULT – Secretaria Municipal de Cultura:',
      answer:
        '<strong class="text-blue-dark">Protocolo:</strong> <a href="tel:2137790950" class="hover:underline">2666-0172</a>',
      isOpen: false,
    },
    {
      question: 'SEMAM – Secretaria Municipal de Agricultura e Meio Ambiente:',
      answer:
        '<strong class="text-blue-dark">Protocolo:</strong> <a href="tel:2137790950" class="hover:underline">3779-0950</a>',
      isOpen: false,
    },
    {
      question: 'SEMED – Secretaria Municipal de Educação:',
      answer:
        '<strong class="text-blue-dark">Protocolo:</strong> <a href="tel:2137790950" class="hover:underline">3779-0950</a>',
      isOpen: false,
    },
    {
      question: 'SEMEF – Secretaria Municipal de Economia e Finanças:',
      answer:
        '<strong class="text-blue-dark">Protocolo:</strong> <a href="tel:2137790950" class="hover:underline">3779-0950</a>',
      isOpen: false,
    },
    {
      question: 'SEMEL – Secretaria Municipal de Esporte e Lazer:',
      answer:
        '<strong class="text-blue-dark">Protocolo:</strong> <a href="tel:2137790950" class="hover:underline">3779-0950</a>',
      isOpen: false,
    },
    {
      question: 'SEMIF – Secretaria Municipal de Infraestrutura:',
      answer:
        '<strong class="text-blue-dark">Protocolo:</strong> <a href="tel:2137790950" class="hover:underline">3779-0950</a>',
      isOpen: false,
    },
    {
      question: 'SEMAT – Secretaria Municipal de Administração e Tecnologia:',
      answer:
        '<strong class="text-blue-dark">Protocolo:</strong> <a href="tel:2137790950" class="hover:underline">3779-0950</a>',
      isOpen: false,
    },
    {
      question: 'SEMSEG – Secretaria Municipal de Segurança Pública:',
      answer:
        '<strong class="text-blue-dark">Protocolo:</strong> <a href="tel:2137790950" class="hover:underline">3779-0950</a>',
      isOpen: false,
    },
    {
      question:
        'SEMTMU – Secretaria Municipal de Transporte, Trânsito e Mobilidade Urbana:',
      answer:
        '<strong class="text-blue-dark">Protocolo:</strong> <a href="tel:2137790950" class="hover:underline">3779-0950</a>',
      isOpen: false,
    },
    {
      question:
        'SEMDETTUR – Secretaria Municipal de Desenvolvimento Econômico, Trabalho e Turismo:',
      answer:
        '<strong class="text-blue-dark">Protocolo:</strong> <a href="tel:2137790950" class="hover:underline">3779-0950</a>',
      isOpen: false,
    },
    {
      question: 'SEMUG – Secretaria Municipal de Governo:',
      answer:
        '<strong class="text-blue-dark">Controle Urbano:</strong>  <br> <strong class="text-blue-dark">Ouvidoria:</strong> <a href="tel:2137790950" class="hover:underline">3779-0950</a> <br> <strong class="text-blue-dark">CPL:</strong> <a href="tel:2137790950" class="hover:underline">3779-0950</a>',
      isOpen: false,
    },
    {
      question: 'SEMUS – Secretaria Municipal de Saúde:',
      answer:
        '<strong class="text-blue-dark">Central de Regulação de Exames:</strong> <a href="tel:2135105210" class="hover:underline">3510-5210</a>',
      isOpen: false,
    },
    {
      question: 'CODENI – Companhia de Desenvolvimento de Nova Iguaçu:',
      answer: '',
      isOpen: false,
    },
    {
      question: 'EMLURB – Empresa Municipal de Limpeza Urbana:',
      answer:
        '<strong class="text-blue-dark">Protocolo:</strong> <a href="tel:2137790950" class="hover:underline">3779-0950</a>',
      isOpen: false,
    },
    {
      question: 'FENIG – Fundação Educacional e Cultural de Nova Iguaçu:',
      answer: '',
      isOpen: false,
    },
    {
      question: 'PGM – Procuradoria-Geral do Município:',
      answer:
        '<strong class="text-blue-dark">Gabinete do Procurador Geral:</strong> <a href="tel:2137790950" class="hover:underline">3779-0950</a> <br> <strong class="text-blue-dark">Dívida Ativa:</strong> <a href="tel:2137790950" class="hover:underline">3779-0950</a>',
      isOpen: false,
    },
    {
      question:
        'PREVINI – Instituto de Previdência dos Servidores de Nova Iguaçu:',
      answer: '<a href="tel:2126662200" class="hover:underline">2666-2200</a>',
      isOpen: false,
    },
  ];
}
