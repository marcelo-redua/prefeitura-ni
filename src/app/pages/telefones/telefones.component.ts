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
        '<strong class="text-blue-dark">Telefones:</strong> <a href="tel:5526664905" class="hover:underline">2666-4905</a> / <a href="tel:5526664901" class="hover:underline">2666-4901</a>',
      isOpen: false,
    },
    {
      question: 'SEMCULT – Secretaria Municipal de Cultura:',
      answer:
        '<strong class="text-blue-dark">Telefone:</strong> <a href="tel:5526660172" class="hover:underline">2666-0172</a>',
      isOpen: false,
    },
    {
      question: 'SEMAM – Secretaria Municipal de Agricultura e Meio Ambiente:',
      answer: '',
      isOpen: false,
    },
    {
      question: 'SEMED – Secretaria Municipal de Educação:',
      answer:
        '<strong class="text-blue-dark">WhatsApp:</strong> <a href="tel:5521997750088" class="hover:underline">2199775-0088</a>',
      isOpen: false,
    },
    {
      question: 'SEMEF – Secretaria Municipal de Economia e Finanças:',
      answer:
        '<strong class="text-blue-dark">CAC:</strong> <a href="tel:5526664970" class="hover:underline">2666-4970</a> / <strong class="text-blue-dark">Gabinete:</strong> <a href="tel:5526664928" class="hover:underline">2666-4928</a>',
      isOpen: false,
    },
    {
      question: 'SEMEL – Secretaria Municipal de Esporte e Lazer:',
      answer:
        '<strong class="text-blue-dark">Telefone:</strong> <a href="tel:5526660171" class="hover:underline">2666-0171</a>',
      isOpen: false,
    },
    {
      question: 'SEMIF – Secretaria Municipal de Infraestrutura:',
      answer:
        '<strong class="text-blue-dark">Telefone:</strong> <a href="tel:5537791109" class="hover:underline">3779-1109</a>',
      isOpen: false,
    },
    {
      question: 'SEMAT – Secretaria Municipal de Administração e Tecnologia:',
      answer:
        '<strong class="text-blue-dark">Protocolo:</strong> <a href="tel:5537790950" class="hover:underline">3779-0950</a><br>' +
        '<strong class="text-blue-dark">Recursos Humanos:</strong> <a href="tel:5537790620" class="hover:underline">3779-0620</a><br>' +
        '<strong class="text-blue-dark">Folha de Pagamento:</strong> <a href="tel:5537790983" class="hover:underline">3779-0983</a><br>' +
        '<strong class="text-blue-dark">TI:</strong> <a href="tel:5526664999" class="hover:underline">2666-4999</a><br>' +
        '<strong class="text-blue-dark">Patrimônio:</strong> <a href="tel:5537790944" class="hover:underline">3779-0944</a><br>' +
        '<strong class="text-blue-dark">Compras e Contratos:</strong> <a href="tel:5537790596" class="hover:underline">3779-0596</a>',
      isOpen: false,
    },
    {
      question: 'SEMSEG – Secretaria Municipal de Segurança Pública:',
      answer:
        '<strong class="text-blue-dark">Telefone:</strong> <a href="tel:5526682403" class="hover:underline">2668-2403</a>',
      isOpen: false,
    },
    {
      question:
        'SEMTMU – Secretaria Municipal de Transporte, Trânsito e Mobilidade Urbana:',
      answer:
        '<strong class="text-blue-dark">Telefone:</strong> <a href="tel:5537791021" class="hover:underline">3779-1021</a>',
      isOpen: false,
    },
    {
      question:
        'SEMDETTUR – Secretaria Municipal de Desenvolvimento Econômico, Trabalho e Turismo:',
      answer:
        '<strong class="text-blue-dark">Telefone:</strong> <a href="tel:5526660163" class="hover:underline">2666-0163</a>',
      isOpen: false,
    },
    {
      question: 'SEMUG – Secretaria Municipal de Governo:',
      answer:
        '<strong class="text-blue-dark">Ouvidoria:</strong> <a href="tel:5526664910" class="hover:underline">2666-4910</a><br>' +
        '<strong class="text-blue-dark">CPL:</strong> <a href="tel:5526664924" class="hover:underline">2666-4924</a><br>' +
        '<strong class="text-blue-dark">Defesa Civil:</strong> <a href="tel:552126675751" class="hover:underline">212667-5751</a> / <a href="tel:199" class="hover:underline">199</a> / <a href="tel:5521981609740" class="hover:underline">98160-9740</a>',
      isOpen: false,
    },
    {
      question: 'SEMUS – Secretaria Municipal de Saúde:',
      answer:
        '<strong class="text-blue-dark">Central de Regulação de Exames:</strong> <a href="tel:5535105210" class="hover:underline">3510-5210</a>',
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
        '<strong class="text-blue-dark">Telefones:</strong> <a href="tel:08000232626" class="hover:underline">0800 023 2626</a> / <a href="tel:5526678016" class="hover:underline">2667-8016</a> / <a href="tel:5527688024" class="hover:underline">2768-8024</a>',
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
        '<strong class="text-blue-dark">Gabinete do Procurador Geral:</strong> <a href="tel:5526662460" class="hover:underline">2666-2460</a><br>' +
        '<strong class="text-blue-dark">Dívida Ativa:</strong> <a href="tel:5526662468" class="hover:underline">2666-2468</a>',
      isOpen: false,
    },
    {
      question:
        'PREVINI – Instituto de Previdência dos Servidores de Nova Iguaçu:',
      answer:
        '<strong class="text-blue-dark">Telefone:</strong> <a href="tel:5526662200" class="hover:underline">2666-2200</a>',
      isOpen: false,
    },
  ];
}
