import { Component } from '@angular/core';
import { HighlightTextComponent } from "../../components/highlight-text/highlight-text.component";
import { SecretaryHeaderComponent } from "../../components/secretary-header/secretary-header.component";
import { SecretaryQuickAccessComponent } from "../../components/secretary-quick-access/secretary-quick-access.component";
import { NewsFeedComponent } from "../../components/news-feed/news-feed.component";

@Component({
  selector: 'app-semat',
  standalone: true,
  imports: [HighlightTextComponent, SecretaryHeaderComponent, SecretaryQuickAccessComponent, NewsFeedComponent],
  templateUrl: './semat.component.html',
  styleUrl: './semat.component.css'
})
export class SematComponent {

}
