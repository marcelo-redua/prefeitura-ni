import { Component } from '@angular/core';
import { HighlightTextComponent } from "../../components/highlight-text/highlight-text.component";
import { SecretaryHeaderComponent } from "../../components/secretary-header/secretary-header.component";

@Component({
  selector: 'app-semdettur',
  standalone: true,
  imports: [HighlightTextComponent, SecretaryHeaderComponent],
  templateUrl: './semdettur.component.html',
  styleUrl: './semdettur.component.css'
})
export class SemdetturComponent {

}
