import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface ButtonCard {
  icon: string; // Caminho ou URL para o ícone
  title: string; // Texto do botão
  link: string; // URL do link
}

@Component({
  selector: 'app-link-card',
  standalone: true, // Indica que é standalone
  imports: [CommonModule], // Adicione o CommonModule aqui
  template: `
    <div class="flex space-x-6 justify-center">
      <a
        *ngFor="let button of buttons"
        [href]="button.link"
        class="flex items-center p-6 border-2 border-orange rounded-3xl text-center bg-white"
      >
        <img [src]="button.icon" [alt]="button.title" class="w-8 h-8 mr-4" />
        <span class="text-lg font-bold text-blue-dark">{{ button.title }}</span>
      </a>
    </div>
  `,
  styles: [],
})
export class LinkCardComponent {
  @Input() buttons: ButtonCard[] = [];
}
