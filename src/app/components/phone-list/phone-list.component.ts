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
      iconSrc: '/assets/icons/defesa-civil.svg',
      phones: ['199', '2667-5751', '98160-9740']
    },
    {
      title: 'Polícia Militar',
      description: 'para emergências de segurança pública.',
      iconSrc: '/assets/icons/policia-militar.svg',
      phones: ['190']
    },
    {
      title: 'Bombeiros',
      description: 'para incêndios e resgates.',
      iconSrc: '/assets/icons/bombeiros.svg',
      phones: ['193']
    },
    {
      title: '4º Grupamento de Bombeiro Militar (Moquetá)',
      description: 'para incêndios e resgates.',
      iconSrc: '/assets/icons/bombeiros.svg',
      phones: ['2669-2592','2669-2093','2669-2789','2669-3775']
    },
    {
      title: '52º DP',
      description: 'para incêndios e resgates.',
      iconSrc: '/assets/icons/policia-militar.svg',
      phones: ['3779-0834','3779-0168']
    },
    {
      title: '56º DP',
      description: 'para incêndios e resgates.',
      iconSrc: '/assets/icons/policia-militar.svg',
      phones: ['2669-4748',' 2669-0221']
    },
    {
      title: '58º DP',
      description: 'para incêndios e resgates.',
      iconSrc: '/assets/icons/policia-militar.svg',
      phones: ['3779-9540']
    },
    {
      title: 'Delegacia Especializada de Atendimento à Mulher',
      description: 'para incêndios e resgates.',
      iconSrc: '/assets/icons/mulheres.svg',
      phones: ['180',' 3779-9555']
    },
    {
      title: 'Hospital Geral de Nova Iguaçu',
      description: 'para incêndios e resgates.',
      iconSrc: '/assets/icons/hospital.svg',
      phones: ['3779-0308']
    },
    {
      title: 'Central de Regulação de Exames',
      description: 'para incêndios e resgates.',
      iconSrc: '/assets/icons/central-exames.svg',
      phones: ['3510-5210']
    },
    {
      title: 'Clínica Dom Walmor',
      description: 'para incêndios e resgates.',
      iconSrc: '/assets/icons/clinica.svg',
      phones: ['2767-9812']
    },
    {
      title: 'Ouvidoria da Prefeitura',
      description: 'para incêndios e resgates.',
      iconSrc: '/assets/icons/ouvidoria.svg',
      phones: ['2666-4910']
    },
    {
      title: 'Conselho Tutelar',
      description: 'para incêndios e resgates.',
      iconSrc: '/assets/icons/conselho.svg',
      phones: ['2668-5568','2657-4510','2763-2484','3769-6487','3766-0308']
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
