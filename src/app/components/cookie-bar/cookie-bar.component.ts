import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cookie-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookie-bar.component.html',
  styleUrls: ['./cookie-bar.component.css']
})
export class CookiePopupComponent {
  cookiesAccepted: boolean = false;

  constructor() {
    this.checkCookieStatus();
  }

  checkCookieStatus(): void {
    const cookieStatus = localStorage.getItem('cookieAccepted');
    this.cookiesAccepted = cookieStatus === 'true';
  }

  acceptCookies(): void {
    localStorage.setItem('cookieAccepted', 'true');
    this.cookiesAccepted = true;
    // Lógica para ativar cookies opcionais pode ser adicionada aqui
  }

  rejectCookies(): void {
    localStorage.setItem('cookieAccepted', 'false');
    this.cookiesAccepted = true;
    // Lógica para desativar cookies opcionais
  }

  manageCookies(): void {
    alert('Abrir gerenciador de cookies');
    // Redirecionar para o gerenciador de cookies ou abrir um modal
  }
}
