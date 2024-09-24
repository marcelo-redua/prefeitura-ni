import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mockup',
  standalone: true,
  imports: [],
  templateUrl: './mockup.component.html',
  styleUrl: './mockup.component.css'
})
export class MockupComponent {
  @Input() appStoreLink!: string;
  @Input() googlePlayLink!: string;
}
