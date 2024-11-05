import { Component, Renderer2, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [
    RouterModule,
  ]
})
export class HeaderComponent implements OnInit {
  private fontSize = 16; // Tamanho de fonte padrão
  private maxFontSize = 24; // Limite superior do tamanho da fonte
  private minFontSize = 12; // Limite inferior do tamanho da fonte
  private dyslexiaFontEnabled = false; // Estado da fonte disléxica

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Carrega a preferência de contraste do usuário do localStorage
    const isDarkMode = localStorage.getItem('isDarkMode') === 'true';
    if (isDarkMode) {
      this.renderer.addClass(document.body, 'dark');
    }
  }

  increaseFontSize() {
    if (this.fontSize < this.maxFontSize) {
      this.fontSize += 2;
      this.renderer.setStyle(document.body, 'font-size', `${this.fontSize}px`);
    }
  }

  decreaseFontSize() {
    if (this.fontSize > this.minFontSize) {
      this.fontSize -= 2;
      this.renderer.setStyle(document.body, 'font-size', `${this.fontSize}px`);
    }
  }

  toggleContrast() {
    const body = document.body;
    const isDarkMode = body.classList.contains('dark');

    if (isDarkMode) {
      this.renderer.removeClass(body, 'dark');
      localStorage.setItem('isDarkMode', 'false');
    } else {
      this.renderer.addClass(body, 'dark');
      localStorage.setItem('isDarkMode', 'true');
    }
  }

  toggleDyslexiaFont() {
    this.dyslexiaFontEnabled = !this.dyslexiaFontEnabled;
    const body = document.body;

    if (this.dyslexiaFontEnabled) {
      this.renderer.addClass(body, 'dyslexia-font');
    } else {
      this.renderer.removeClass(body, 'dyslexia-font');
    }
  }
}
