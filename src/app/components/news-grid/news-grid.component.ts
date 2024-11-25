import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface NewsItem {
  image: string;    // URL da imagem
  title: string;    // Título da notícia
  link: string;     // Link para a notícia
}

@Component({
  selector: 'app-news-grid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-3 gap-4">
      <!-- Notícia em destaque -->
      <div class="col-span-2 relative">
        <a [href]="highlight.link" class="block h-full">
          <img
            [src]="highlight.image"
            alt="Destaque"
            class="w-full h-full object-cover rounded-lg"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
          <div class="absolute bottom-4 left-4 text-white">
            <h2 class="text-lg font-bold">{{ highlight.title }}</h2>
          </div>
        </a>
      </div>

      <!-- Notícias menores -->
      <div class="grid grid-rows-2 gap-4">
        <div
          *ngFor="let news of otherNews"
          class="relative rounded-lg overflow-hidden"
        >
          <a [href]="news.link" class="block h-full">
            <img
              [src]="news.image"
              alt="Notícia"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div class="absolute bottom-2 left-2 text-white">
              <h3 class="text-sm font-bold">{{ news.title }}</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class NewsGridComponent {
  @Input() highlight!: NewsItem;
  @Input() otherNews: NewsItem[] = [];
}
