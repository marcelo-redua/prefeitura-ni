import { Component, Renderer2 } from '@angular/core';
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
export class HeaderComponent {
  private fontSize = 16; // Tamanho de fonte padrão
  private maxFontSize = 24; // Limite superior do tamanho da fonte
  private minFontSize = 12; // Limite inferior do tamanho da fonte
  private dyslexiaFontEnabled = false; // Estado da fonte disléxica

  constructor(private renderer: Renderer2) {}

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
    if (body.classList.contains('dark')) {
      this.renderer.removeClass(body, 'dark');
    } else {
      this.renderer.addClass(body, 'dark');
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
