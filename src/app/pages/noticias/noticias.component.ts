import { Component } from '@angular/core';
import { HighlightTextComponent } from "../../components/highlight-text/highlight-text.component";
import { NewsFeedComponent } from "../../components/news-feed/news-feed.component";

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [HighlightTextComponent, NewsFeedComponent],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {

}
