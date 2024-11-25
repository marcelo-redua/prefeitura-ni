import { Component } from '@angular/core';
import { HighlightTextComponent } from "../../components/highlight-text/highlight-text.component";
import { SecretaryHeaderComponent } from "../../components/secretary-header/secretary-header.component";
import { SecretaryQuickAccessComponent } from "../../components/secretary-quick-access/secretary-quick-access.component";
import { NewsFeedComponent } from "../../components/news-feed/news-feed.component";

@Component({
  selector: 'app-semdettur',
  standalone: true,
  imports: [HighlightTextComponent, SecretaryHeaderComponent, SecretaryQuickAccessComponent, NewsFeedComponent],
  templateUrl: './semdettur.component.html',
  styleUrl: './semdettur.component.css'
})
export class SemdetturComponent {

}
