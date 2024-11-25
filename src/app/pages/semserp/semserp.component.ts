import { Component } from '@angular/core';
import { SecretaryHeaderComponent } from "../../components/secretary-header/secretary-header.component";
import { HighlightTextComponent } from "../../components/highlight-text/highlight-text.component";
import { SecretaryQuickAccessComponent } from "../../components/secretary-quick-access/secretary-quick-access.component";
import { NewsFeedComponent } from "../../components/news-feed/news-feed.component";

@Component({
  selector: 'app-semserp',
  standalone: true,
  imports: [SecretaryHeaderComponent, HighlightTextComponent, SecretaryQuickAccessComponent, NewsFeedComponent],
  templateUrl: './semserp.component.html',
  styleUrl: './semserp.component.css'
})
export class SemserpComponent {

}
