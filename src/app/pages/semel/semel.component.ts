import { Component } from '@angular/core';
import { NewsFeedComponent } from "../../components/news-feed/news-feed.component";
import { HighlightTextComponent } from "../../components/highlight-text/highlight-text.component";
import { SecretaryHeaderComponent } from "../../components/secretary-header/secretary-header.component";
import { SecretaryQuickAccessComponent } from "../../components/secretary-quick-access/secretary-quick-access.component";

@Component({
  selector: 'app-semel',
  standalone: true,
  imports: [NewsFeedComponent, HighlightTextComponent, SecretaryHeaderComponent, SecretaryQuickAccessComponent],
  templateUrl: './semel.component.html',
  styleUrl: './semel.component.css'
})
export class SemelComponent {

}
