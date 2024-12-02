import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-phone-list',
  imports: [RouterModule, CommonModule], // Importação do RouterModule
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css'],
  standalone: true
})
export class PhoneListComponent {
  phoneItems = [
    {
      title: 'Defesa Civil',
      description: 'para emergências relacionadas à defesa civil.',
      iconSrc: 'assets/icons/defesa-civil.svg',
      phones: ['199', '2667-5751', '98160-9740']
    },
    {
      title: 'Polícia Militar',
      description: 'para emergências de segurança pública.',
      iconSrc: 'assets/icons/policia-militar.svg',
      phones: ['190', '2667-3775']
    },
    {
      title: 'Bombeiros',
      description: 'para incêndios e resgates.',
      iconSrc: 'assets/icons/bombeiros.svg',
      phones: ['193']
    },
    {
      title: '4º Grupamento de Bombeiro Militar (Moquetá)',
      description: 'para incêndios e resgates.',
      iconSrc: 'assets/icons/bombeiros.svg',
      phones: ['193']
    },
    {
      title: '52º DP',
      description: 'para incêndios e resgates.',
      iconSrc: 'assets/icons/bombeiros.svg',
      phones: ['193']
    },
    {
      title: '56º DP',
      description: 'para incêndios e resgates.',
      iconSrc: 'assets/icons/bombeiros.svg',
      phones: ['193']
    },
    {
      title: '58º DP',
      description: 'para incêndios e resgates.',
      iconSrc: 'assets/icons/bombeiros.svg',
      phones: ['193']
    },
    {
      title: 'Delegacia Especializada de Atendimento à Mulher',
      description: 'para incêndios e resgates.',
      iconSrc: 'assets/icons/bombeiros.svg',
      phones: ['193']
    },
    {
      title: 'Hospital Geral de Nova Iguaçu',
      description: 'para incêndios e resgates.',
      iconSrc: 'assets/icons/bombeiros.svg',
      phones: ['193']
    },
    {
      title: 'Central de Regulação de Exames',
      description: 'para incêndios e resgates.',
      iconSrc: 'assets/icons/bombeiros.svg',
      phones: ['193']
    },
    {
      title: 'Clínica Dom Walmor',
      description: 'para incêndios e resgates.',
      iconSrc: 'assets/icons/bombeiros.svg',
      phones: ['193']
    },
    {
      title: 'Ouvidoria da Prefeitura',
      description: 'para incêndios e resgates.',
      iconSrc: 'assets/icons/bombeiros.svg',
      phones: ['193']
    },
    {
      title: 'Conselho Tutelar',
      description: 'para incêndios e resgates.',
      iconSrc: 'assets/icons/bombeiros.svg',
      phones: ['193']
    },
    // Adicione os demais itens aqui.
  ];

  generatePhoneHref(phone: string): string {
    // Números de 3 dígitos (não precisam de DDD)
    if (phone.length === 3) {
      return `tel:${phone}`;
    }
    // Adiciona o DDD 21 para números maiores que 3 dígitos
    return `tel:21${phone.replace(/\D/g, '')}`; // Remove caracteres não numéricos
  }
}
