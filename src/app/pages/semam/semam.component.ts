import { Component } from '@angular/core';
import { SecretaryHeaderComponent } from "../../components/secretary-header/secretary-header.component";
import { SecretaryQuickAccessComponent } from "../../components/secretary-quick-access/secretary-quick-access.component";
import { HighlightTextComponent } from "../../components/highlight-text/highlight-text.component";
import { NewsFeedComponent } from "../../components/news-feed/news-feed.component";

@Component({
  selector: 'app-semam',
  standalone: true,
  imports: [SecretaryHeaderComponent, SecretaryQuickAccessComponent, HighlightTextComponent, NewsFeedComponent],
  templateUrl: './semam.component.html',
  styleUrl: './semam.component.css'
})
export class SemamComponent {

}
