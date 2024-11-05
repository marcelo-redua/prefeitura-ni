import { Component } from '@angular/core';
import { HighlightTextComponent } from "../../components/highlight-text/highlight-text.component";
import { SecretaryHeaderComponent } from "../../components/secretary-header/secretary-header.component";
import { SecretaryQuickAccessComponent } from "../../components/secretary-quick-access/secretary-quick-access.component";

@Component({
  selector: 'app-semcult',
  standalone: true,
  imports: [HighlightTextComponent, SecretaryHeaderComponent, SecretaryQuickAccessComponent],
  templateUrl: './semcult.component.html',
  styleUrl: './semcult.component.css'
})
export class SemcultComponent {

}
