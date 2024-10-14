import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HighlightTextComponent } from "../../components/highlight-text/highlight-text.component";

@Component({
  standalone: true,
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.css'],
  imports: [FormsModule, CommonModule, HighlightTextComponent]
})
export class FaleConoscoComponent {
  tipoSelecionado: string = '';
  form = {
    assunto: '',
    tipo: '',
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    cep: '',
    rua: '',
    numero: '',
    mensagem: ''
  };

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.tipoSelecionado = params['tipo'] || '';
      if (this.tipoSelecionado) {
        this.form.tipo = this.tipoSelecionado;
      }
    });
  }

  onSubmit() {
    const { assunto, tipo, nome, cpf, email, telefone, cep, rua, numero, mensagem } = this.form;
    const emailTo = 'marcelo.redua@outlook.com';
    const subject = `Assunto: ${encodeURIComponent(assunto)}`;
    const body = `
      Tipo: ${encodeURIComponent(tipo)}
      Nome: ${encodeURIComponent(nome)}
      CPF: ${encodeURIComponent(cpf)}
      E-mail: ${encodeURIComponent(email)}
      Telefone: ${encodeURIComponent(telefone)}
      CEP: ${encodeURIComponent(cep)}
      Rua: ${encodeURIComponent(rua)}
      Número: ${encodeURIComponent(numero)}
      Mensagem: ${encodeURIComponent(mensagem)}
    `;

    const mailtoLink = `mailto:${emailTo}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  }
  
}
