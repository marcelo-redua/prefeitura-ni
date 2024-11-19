import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface CardSeiItem {
  title: string;       // Título do card
  description: string; // Descrição do card
}

@Component({
  selector: 'app-card-sei',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div
        *ngFor="let item of items"
        class="max-w-xs rounded-3xl overflow-hidden p-6 bg-white border-2 border-gray"
      >
        <h2 class="text-xl font-bold text-gray-800 mb-2 border-b border-gray text-blue-dark">
          {{ item.title }}
        </h2>
        <p class="text-blue-dark text-base font-medium">
          {{ item.description }}
        </p>
      </div>
    </div>
  `,
  styles: [],
})
export class CardSeiComponent {
  @Input() items: CardSeiItem[] = [];
}
