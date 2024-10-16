import { Component } from '@angular/core';
import { HighlightTextComponent } from '../../components/highlight-text/highlight-text.component';

@Component({
  selector: 'app-diario',
  standalone: true,
  imports: [HighlightTextComponent],
  templateUrl: './diario.component.html',
  styleUrl: './diario.component.css'
})
export class DiarioComponent {

}
