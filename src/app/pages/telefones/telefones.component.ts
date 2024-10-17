import { Component } from '@angular/core';
import { HighlightTextComponent } from "../../components/highlight-text/highlight-text.component";

@Component({
  selector: 'app-telefones',
  standalone: true,
  imports: [HighlightTextComponent],
  templateUrl: './telefones.component.html',
  styleUrl: './telefones.component.css'
})
export class TelefonesComponent {

}
