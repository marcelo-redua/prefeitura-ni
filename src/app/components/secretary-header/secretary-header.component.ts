import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secretary-header',
  standalone: true,
  templateUrl: './secretary-header.component.html',
  styleUrls: ['./secretary-header.component.css'],
})
export class SecretaryHeaderComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() imagePath!: string;
}
