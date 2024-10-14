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
    { title: 'IPTU 2024', icon: '../../../assets/servicos/icon1.svg', link: '/iptu-2024' },
    { title: 'Nota Fiscal Eletrônica', icon: '../../../assets/servicos/icon2.svg', link: '/nota-fiscal-eletronica' },
    { title: 'Portal do Contribuinte', icon: '../../../assets/servicos/icon3.svg', link: '/portal-do-contribuinte' },
    { title: 'Dívida Ativa', icon: '../../../assets/servicos/icon4.svg', link: '/divida-ativa' },
    { title: 'Reparo de Buracos', icon: '../../../assets/servicos/icon5.svg', link: '/divida-ativa' },
    { title: 'Portal da Transparência', icon: '../../../assets/servicos/icon6.svg', link: '/reparo-de-buracos' },
    { title: 'Remoção de Entulho', icon: '../../../assets/servicos/icon7.svg', link: '/portal-da-transparencia' },
    { title: 'Assistência Social', icon: '../../../assets/servicos/icon8.svg', link: '/remocao-de-entulho' },
    { title: 'Portal do Servidor', icon: '../../../assets/servicos/icon9.svg', link: '/assistencia-social' },
    { title: 'Diário Oficial', icon: '../../../assets/servicos/icon10.svg', link: '/portal-do-servidor' },
    { title: 'Portal de Notícias', icon: '../../../assets/servicos/icon11.svg', link: '/diario-oficial' },
    { title: 'Iluminação Pública', icon: '../../../assets/servicos/icon12.svg', link: '/portal-de-noticias' },
    { title: 'Sinalização De Trânsito', icon: '../../../assets/servicos/icon13.svg', link: '/iluminacao-publica' },
    { title: 'Controle de Roedores', icon: '../../../assets/servicos/icon14.svg', link: '/sinalizacao-de-transito' },
    { title: 'Limpeza de Ruas/avenidas', icon: '../../../assets/servicos/icon15.svg', link: '/controle-de-roedores' },
    { title: 'Outros Serviços', icon: '../../../assets/servicos/icon18.svg', link: '/limpeza-de-ruas-avenidas' },
  ];
}