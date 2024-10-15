import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Service {
  title: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-service-panel',
  standalone: true,
  imports: [CardComponent, RouterLink, CommonModule],
  templateUrl: './service-panel.component.html',
  styleUrl: './service-panel.component.css'
})
export class ServicePanelComponent {
  services: Service[] = [
    { title: 'IPTU', icon: '../../../assets/servicos/iptu-icon.svg', link: '/iptu-2024' },
    { title: 'Nota Fiscal Eletrônica', icon: '../../../assets/servicos/nf-icon.svg', link: '/nota-fiscal-eletronica' },
    { title: 'Portal do Contribuinte', icon: '../../../assets/servicos/portal-icon.svg', link: '/portal-do-contribuinte' },
    { title: 'Dívida Ativa', icon: '../../../assets/servicos/divida-icon.svg', link: '/divida-ativa' },
    { title: 'Reparo de Buracos', icon: '../../../assets/servicos/reparo-icon.svg', link: '/divida-ativa' },
    { title: 'Portal da Transparência', icon: '../../../assets/servicos/transparencia-icon.svg', link: '/reparo-de-buracos' },
    { title: 'Remoção de Entulho', icon: '../../../assets/servicos/remocao-icon.svg', link: '/portal-da-transparencia' },
    { title: 'Assistência Social', icon: '../../../assets/servicos/assist-icon.svg', link: '/remocao-de-entulho' },
    { title: 'Portal do Servidor', icon: '../../../assets/servicos/servidor-icon.svg', link: '/assistencia-social' },
    { title: 'Diário Oficial', icon: '../../../assets/servicos/diario-icon.svg', link: '/portal-do-servidor' },
    { title: 'Portal de Notícias', icon: '../../../assets/servicos/noticias-icon.svg', link: '/diario-oficial' },
    { title: 'Iluminação Pública', icon: '../../../assets/servicos/iluminacao-icon.svg', link: '/portal-de-noticias' },
    { title: 'Sinalização De Trânsito', icon: '../../../assets/servicos/transito-icon.svg', link: '/iluminacao-publica' },
    { title: 'Controle de Roedores', icon: '../../../assets/servicos/roedores-icon.svg', link: '/sinalizacao-de-transito' },
    { title: 'Limpeza de Ruas/avenidas', icon: '../../../assets/servicos/limpeza-icon.svg', link: '/controle-de-roedores' },
    { title: 'Outros Serviços', icon: '../../../assets/servicos/outros-icon.svg', link: '/limpeza-de-ruas-avenidas' },
  ];
}