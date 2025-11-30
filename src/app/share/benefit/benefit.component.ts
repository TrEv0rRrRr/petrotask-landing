import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-benefit',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './benefit.component.html',
  styleUrl: './benefit.component.css'
})
export class BenefitComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
