import { Component } from '@angular/core';
import { NewsFeedComponent } from "../../components/news-feed/news-feed.component";
import { SecretaryQuickAccessComponent } from "../../components/secretary-quick-access/secretary-quick-access.component";
import { HighlightTextComponent } from "../../components/highlight-text/highlight-text.component";
import { SecretaryHeaderComponent } from "../../components/secretary-header/secretary-header.component";

@Component({
  selector: 'app-semus',
  standalone: true,
  imports: [NewsFeedComponent, SecretaryQuickAccessComponent, HighlightTextComponent, SecretaryHeaderComponent],
  templateUrl: './semus.component.html',
  styleUrl: './semus.component.css'
})
export class SemusComponent {

}
