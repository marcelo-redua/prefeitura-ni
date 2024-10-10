import { Component } from '@angular/core';
import { HighlightTextComponent } from "../../components/highlight-text/highlight-text.component";
import { FeedbackSectionComponent } from "../../components/feedback-section/feedback-section.component";
import { BannerComponent } from "../../components/banner/banner.component";

@Component({
  selector: 'app-ouvidoria',
  standalone: true,
  imports: [HighlightTextComponent, FeedbackSectionComponent, BannerComponent],
  templateUrl: './ouvidoria.component.html',
  styleUrl: './ouvidoria.component.css'
})
export class OuvidoriaComponent {

}
