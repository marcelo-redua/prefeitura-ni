import { Component } from '@angular/core';
import { HighlightTextComponent } from "../../components/highlight-text/highlight-text.component";
import { ServicePanelComponent } from "../../components/service-panel/service-panel.component";
import { MockupComponent } from "../../components/mockup/mockup.component";
import { LatestNewsComponent, NewsItem } from '../../components/latest-news/latest-news.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { ButtonComponent } from "../../components/button/button.component";
import { LiveChatComponent } from "../../components/live-chat/live-chat.component";
import { BannerComponent } from "../../components/banner/banner.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HighlightTextComponent, ServicePanelComponent, MockupComponent, LatestNewsComponent, CarouselComponent, ButtonComponent, LiveChatComponent, BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   newsData: NewsItem[] = [
    {
      title: "Nova Iguaçu promove mais uma feira de adoção de pets neste sábado (13)",
      date: "11 de julho de 2024",
      imageUrl: "../../../assets/destaque1.jpg",
      link: "/noticias/1",
    },
    {
      title: "Nova Iguaçu elege seus delegados para a Conferência Estadual das Cidades",
      date: "08 de julho de 2024",
      imageUrl: "../../../assets/destaque2.jpeg",
      link: "/noticias/2",
    },

    // ... outras notícias
  ];

}
