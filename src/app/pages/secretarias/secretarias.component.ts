import { Component } from '@angular/core';
import { HighlightTextComponent } from '../../components/highlight-text/highlight-text.component';

@Component({
  selector: 'app-secretarias',
  standalone: true,
  imports: [HighlightTextComponent],
  templateUrl: './secretarias.component.html',
  styleUrl: './secretarias.component.css'
})
export class SecretariasComponent {

}
