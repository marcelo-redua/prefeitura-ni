import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() surface: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() label: string = 'Button';
  @Input() icon?: string;  // Nome da classe do ícone, caso seja utilizado
  @Input() disabled: boolean = false;

  getClass() {
    return {
      'btn-primary': this.surface === 'primary',
      'btn-secondary': this.surface === 'secondary',
      'btn-tertiary': this.surface === 'tertiary'
    };
  }
}