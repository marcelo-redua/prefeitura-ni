import { Component } from '@angular/core';
import { SecretaryHeaderComponent } from "../../components/secretary-header/secretary-header.component";
import { SecretaryQuickAccessComponent } from "../../components/secretary-quick-access/secretary-quick-access.component";
import { HighlightTextComponent } from "../../components/highlight-text/highlight-text.component";

@Component({
  selector: 'app-semas',
  standalone: true,
  imports: [SecretaryHeaderComponent, SecretaryQuickAccessComponent, HighlightTextComponent],
  templateUrl: './semas.component.html',
  styleUrl: './semas.component.css'
})
export class SemasComponent {

}
