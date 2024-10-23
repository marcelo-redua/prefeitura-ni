import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  template: `
    <button
      *ngIf="isSubmit; else linkTemplate"
      type="submit"
      [ngClass]="getClasses()"
    >
      {{ text }}
    </button>

    <ng-template #linkTemplate>
      <a [routerLink]="href" [ngClass]="getClasses()">
        {{ text }}
      </a>
    </ng-template>
  `,
  standalone: true,
  imports: [CommonModule, RouterModule],
  styles: [],
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() isSubmit: boolean = true;
  @Input() href: string = '';
  @Input() bgColor: string = 'bg-orange';
  @Input() textColor: string = 'text-white';
  @Input() borderColor: string = 'border-transparent';
  @Input() borderWidth: string = 'border-2';
  @Input() hoverBgColor: string = 'hover:bg-orange-dark';
  @Input() hoverTextColor: string = 'hover:text-white';
  @Input() hoverBorderColor: string = 'hover:border-orange-dark';

  getClasses(): string {
    return `
      ${this.bgColor} ${this.textColor} ${this.borderColor} ${this.borderWidth}
      font-bold py-2 px-6 rounded-full focus:outline-none focus:ring-0 focus:ring-opacity-50
      ${this.hoverBgColor} ${this.hoverTextColor} ${this.hoverBorderColor}
    `;
  }
}
