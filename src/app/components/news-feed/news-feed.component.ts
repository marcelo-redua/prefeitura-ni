import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface NewsItem {
  title: string;
  date: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-news-feed',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        *ngFor="let news of newsList"
        class="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <a [href]="news.link" class="block">
          <img
            [src]="news.image"
            [alt]="news.title"
            class="w-full h-48 object-cover"
          />
        </a>
        <div class="p-4">
          <a [href]="news.link">
            <h3 class="text-blue-dark text-lg font-semibold hover:underline">
              {{ news.title }}
            </h3>
          </a>
          <p class="text-orange text-sm mt-2">{{ news.date }}</p>
        </div>
      </div>
    </div>
  `,

})
export class NewsFeedComponent {
  @Input() newsList: NewsItem[] = [];
}
