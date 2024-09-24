import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlight-text',
  standalone: true, // Adicione standalone: true
  templateUrl: './highlight-text.component.html',
  styleUrls: ['./highlight-text.component.css'],
  imports: [CommonModule,]
})
export class HighlightTextComponent {
  @Input() topText: string = '';
  @Input() highlightText: string = '';
  @Input() image: string = '';
}
