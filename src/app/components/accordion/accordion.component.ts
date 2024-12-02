import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule para usar diretivas como *ngIf e *ngFor
  template: `
    <div class="mx-auto my-8">
      <div *ngFor="let item of items" class="border-b-2 border-gray">
        <!-- Botão do Acordeão -->
        <button
          (click)="toggleOpen(item)"
          class="w-full text-left p-4 flex justify-between items-center"
        >
          <span class="text-lg font-semibold text-blue-dark">
            {{ item.question }}
          </span>
          <svg
            width="20"
            class="text-orange transform"
            [class.rotate-180]="item.isOpen"
            [class.rotate-0]="!item.isOpen"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <!-- Conteúdo do Acordeão -->
        <div *ngIf="item.isOpen" class="p-4 text-orange">
          <div [innerHTML]="item.answer"></div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .rotate-180 {
        transform: rotate(180deg);
      }
      .rotate-0 {
        transform: rotate(0deg);
      }
    `,
  ],
})
export class AccordionComponent {
  @Input() items: { question: string; answer: string; isOpen: boolean }[] = [];

  toggleOpen(item: any) {
    item.isOpen = !item.isOpen;
  }
}
