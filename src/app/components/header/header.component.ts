import { CommonModule } from '@angular/common';
import { Component, Renderer2, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ]
})
export class HeaderComponent implements OnInit {
  private fontSize = 16; // Tamanho de fonte padrão
  private maxFontSize = 24; // Limite superior do tamanho da fonte
  private minFontSize = 12; // Limite inferior do tamanho da fonte
  private dyslexiaFontEnabled = false; // Estado da fonte disléxica
  searchResults: string[] = []; // Resultados da pesquisa
  private data: string[] = ['Início', 'Secretarias', 'Diário Oficial', 'Notícias', 'Transparência']; // Dados para exemplo de busca
  searchQuery: string = ''; // Armazena o termo de pesquisa
  isSearchVisible = false;
  isMenuVisible = false;

  constructor(private renderer: Renderer2, private router: Router) {}

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

  onSearch(event: Event) {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    this.searchResults = this.data.filter(item =>
      item.toLowerCase().includes(query)
    );
  }

  onSearchSubmit() {
    // Redireciona para a página de resultados com a query
    this.router.navigate(['/resultados'], { queryParams: { query: this.searchQuery } });
  }

  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
