import { Component } from '@angular/core';

@Component({
  selector: 'app-live-chat',
  standalone: true,
  imports: [],
  templateUrl: './live-chat.component.html',
  styleUrl: './live-chat.component.css'
})
export class LiveChatComponent {

  // Função para abrir o WhatsApp Business Chat
  openWhatsApp() {
    const phoneNumber = '+5521981562640'; // Substitua pelo número do WhatsApp Business
    const whatsappURL = `https://wa.me/${phoneNumber}?text=Olá,%20preciso%20de%20ajuda!`;
    window.open(whatsappURL, '_blank');
  }
}