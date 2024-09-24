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
    { title: 'Remoção de entulhos', icon: '../../../assets/servicos/icon1.svg', link: '/iptu-2024' },
    { title: 'Iluminação pública', icon: '../../../assets/servicos/icon1.svg', link: '/nota-fiscal-eletronica' },
    { title: 'Combate ao Aedes Aegypti', icon: '../../../assets/servicos/icon1.svg', link: '/portal-do-contribuinte' },
    { title: 'Reparo de buracos', icon: '../../../assets/servicos/icon1.svg', link: '/divida-ativa' },
    { title: 'Limpeza de rua', icon: '../../../assets/servicos/icon1.svg', link: '/reparo-de-buracos' },
    { title: 'Sinais de trânsito com defeito', icon: '../../../assets/servicos/icon1.svg', link: '/portal-da-transparencia' },
    { title: 'Combate ao caramujo africano', icon: '../../../assets/servicos/icon1.svg', link: '/remocao-de-entulho' },
    { title: 'Controle de roedores', icon: '../../../assets/servicos/icon1.svg', link: '/assistencia-social' },
    { title: 'Portal do servidor', icon: '../../../assets/servicos/icon1.svg', link: '/portal-do-servidor' },
    { title: 'Diário oficial', icon: '../../../assets/servicos/icon1.svg', link: '/diario-oficial' },
    { title: 'Portal de notícias', icon: '../../../assets/servicos/icon1.svg', link: '/portal-de-noticias' },
    { title: 'Iluminação pública', icon: '../../../assets/servicos/icon1.svg', link: '/iluminacao-publica' },
    { title: 'Sinalização de trânsito', icon: '../../../assets/servicos/icon1.svg', link: '/sinalizacao-de-transito' },
    { title: 'Controle de roedores', icon: '../../../assets/servicos/icon1.svg', link: '/controle-de-roedores' },
    { title: 'Limpeza de ruas/avenidas', icon: '../../../assets/servicos/icon1.svg', link: '/limpeza-de-ruas-avenidas' },
    { title: 'Outros serviços', icon: '../../../assets/servicos/icon18.svg', link: '/combate-a-dengue' },
  ];
}