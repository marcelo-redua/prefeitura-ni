import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-secretary-card',
  standalone: true,
  imports: [RouterModule], // Importando o RouterModule
  templateUrl: './secretary-card.component.html',
  styleUrls: ['./secretary-card.component.css'],
})
export class SecretaryCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() secretaryName!: string;
  @Input() secretaryGender!: string;
  @Input() secretaryImage!: string;
  @Input() secretaryIcon!: string;
  @Input() linkUrl!: string;
}
