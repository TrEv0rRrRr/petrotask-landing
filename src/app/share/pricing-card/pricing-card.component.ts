import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-pricing-card',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.css'
})
export class PricingCardComponent {
  @Input() title!: string;
  @Input() description?: string;
  @Input() features!: string[];
  @Input() price!: string;
  @Input() button?: string;
  @Input() recommended?: boolean;
}
