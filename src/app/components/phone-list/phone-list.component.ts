import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-phone-list',
  imports: [RouterModule, CommonModule],
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
      phones: [
        { label: 'Central:', number: '199' },
        { label: '', number: '2667-5751' },
        { label: '', number: '98160-9740' }
      ]
    },
    {
      title: 'Polícia Militar',
      description: 'para emergências de segurança pública.',
      iconSrc: '/assets/icons/policia-militar.svg',
      phones: [
        { label: 'Central:', number: '190' }
      ]
    },
    {
      title: 'Bombeiros',
      description: 'para incêndios e resgates.',
      iconSrc: '/assets/icons/bombeiros.svg',
      phones: [
        { label: 'Central:', number: '193' }
      ]
    },
    {
      title: '4º Grupamento de Bombeiro Militar (Moquetá)',
      description: 'para incêndios e resgates.',
      iconSrc: '/assets/icons/bombeiros.svg',
      phones: [
        { label: '', number: '2669-2592' },
        { label: '', number: '2669-2093' },
        { label: '', number: '2669-2789' },
        { label: '', number: '2669-3775' }
      ]
    },
    {
      title: '52º DP',
      description: 'para emergências de segurança pública.',
      iconSrc: '/assets/icons/policia-militar.svg',
      phones: [
        { label: '', number: '3779-0834' },
        { label: '', number: '3779-0168' }
      ]
    },
    {
      title: '56º DP',
      description: 'para emergências de segurança pública.',
      iconSrc: '/assets/icons/policia-militar.svg',
      phones: [
        { label: '', number: '2669-4748' },
        { label: '', number: '2669-0221' }
      ]
    },
    {
      title: '58º DP',
      description: 'para emergências de segurança pública.',
      iconSrc: '/assets/icons/policia-militar.svg',
      phones: [
        { label: '', number: '3779-9540' }
      ]
    },
    {
      title: 'Delegacia Especializada de Atendimento à Mulher',
      description: 'para atendimento às mulheres.',
      iconSrc: '/assets/icons/mulheres.svg',
      phones: [
        { label: 'Central:', number: '180' },
        { label: '', number: '3779-9555' }
      ]
    },
    {
      title: 'Hospital Geral de Nova Iguaçu',
      description: 'para emergências hospitalares.',
      iconSrc: '/assets/icons/hospital.svg',
      phones: [
        { label: '', number: '3779-0308' }
      ]
    },
    {
      title: 'Central de Regulação de Exames',
      description: 'para agendamento de exames.',
      iconSrc: '/assets/icons/central-exames.svg',
      phones: [
        { label: '', number: '3510-5210' }
      ]
    },
    {
      title: 'Clínica Dom Walmor',
      description: 'atendimento clínico.',
      iconSrc: '/assets/icons/clinica.svg',
      phones: [
        { label: '', number: '2767-9812' }
      ]
    },
    {
      title: 'Ouvidoria da Prefeitura',
      description: 'para atendimento à população.',
      iconSrc: '/assets/icons/ouvidoria.svg',
      phones: [
        { label: '', number: '2666-4910' }
      ]
    },
    {
      title: 'Conselho Tutelar',
      description: 'para atendimento de casos envolvendo menores.',
      iconSrc: '/assets/icons/conselho.svg',
      phones: [
        { label: 'Centro: 2668-5568', number: '2668-5568' },
        { label: 'Cabuçu: 2657-4510', number: '2657-4510' },
        { label: 'Austin: 2763-2484', number: '2763-2484' },
        { label: 'Vila de Cava:', number: '3769-6487' },
        { label: 'Comendador Soares:', number: '3766-0308' }
      ]
    }
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
