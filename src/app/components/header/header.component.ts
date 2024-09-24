import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: []
})
export class HeaderComponent {
  private defaultFontSize: number = 16;

  // Função para aumentar o tamanho da fonte
  increaseFontSize() {
    const root = document.documentElement;
    const currentFontSize = parseFloat(window.getComputedStyle(root).fontSize);
    root.style.fontSize = `${currentFontSize * 1.2}px`;
  }

  // Função para diminuir o tamanho da fonte
  decreaseFontSize() {
    const root = document.documentElement;
    const currentFontSize = parseFloat(window.getComputedStyle(root).fontSize);
    root.style.fontSize = `${currentFontSize * 0.8}px`;
  }

  // Função para ativar/desativar o modo de alto contraste
  toggleContrast() {
    const body = document.body;
    body.classList.toggle('high-contrast');
  }
}