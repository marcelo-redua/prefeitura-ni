import { Component } from '@angular/core';
import { NewsFeedComponent } from "../../components/news-feed/news-feed.component";
import { SecretaryQuickAccessComponent } from "../../components/secretary-quick-access/secretary-quick-access.component";
import { HighlightTextComponent } from "../../components/highlight-text/highlight-text.component";
import { SecretaryHeaderComponent } from "../../components/secretary-header/secretary-header.component";

@Component({
  selector: 'app-semef',
  standalone: true,
  imports: [NewsFeedComponent, SecretaryQuickAccessComponent, HighlightTextComponent, SecretaryHeaderComponent],
  templateUrl: './semef.component.html',
  styleUrl: './semef.component.css'
})
export class SemefComponent {

}
