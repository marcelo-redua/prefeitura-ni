import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  imports: [CommonModule],
  template: `
<div
  *ngIf="!cookiesAccepted"
  class="fixed bottom-0 w-full  bg-black/80 text-white shadow-lg"
  style="z-index: 10000; height: 80px;"
>
  <div class="container mx-auto flex justify-between items-center h-full p-4">
    <div class="text-sm">
      Utilizamos cookies para melhorar sua experiência no site. Ao continuar navegando, você concorda com nossa
      <a href="/politica-de-cookies" class="underline text-orange">política de cookies</a>.
    </div>
    <button
      class="bg-blue-dark hover:bg-blue-light text-white font-semibold py-2 px-4 rounded"
      (click)="acceptCookies()"
    >
      Aceitar
    </button>
  </div>
</div>


  `,
  styleUrls: ['./cookie-consent.component.css'],
})
export class CookieConsentComponent {
  cookiesAccepted = false;

  constructor() {
    this.cookiesAccepted = localStorage.getItem('cookiesAccepted') === 'true';
  }

  acceptCookies(): void {
    this.cookiesAccepted = true;
    localStorage.setItem('cookiesAccepted', 'true');
  }
}
