import { Component, Input } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../button/button.component";

export interface NewsItem {
  link: string;
  imageUrl: string;
  title: string;
  date: string;
}
@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [CardComponent, CommonModule, ButtonComponent],
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.css'
})
export class LatestNewsComponent {
  @Input() news: NewsItem[] = [];
}
