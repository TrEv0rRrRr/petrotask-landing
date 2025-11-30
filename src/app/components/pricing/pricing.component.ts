import { Component } from '@angular/core';
import { PricingCardComponent } from '../../share/pricing-card/pricing-card.component';
import { NgForOf } from '@angular/common';
import { TranslatePipe, TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    PricingCardComponent,
    NgForOf,
    TranslatePipe
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  constructor(private translate: TranslateService) {
    this.plans = this.buildPlansFromI18n();
    this.translate.onLangChange.subscribe((_e: LangChangeEvent) => {
      this.plans = this.buildPlansFromI18n();
    });
  }

  plans: Array<{
    title: string;
    description: string;
    price: string;
    features: string[];
    button: string;
    recommended?: boolean;
  }> = [];

  private buildPlansFromI18n() {
    const ids = ['basic', 'pro', 'enterprise'] as const;
    return ids.map(id => {
      const base = `pricing.plans.${id}`;
      const title = this.translate.instant(`${base}.title`);
      const description = this.translate.instant(`${base}.description`);
      const price = this.translate.instant(`${base}.price`);
      const button = this.translate.instant(`${base}.button`);
      const features = this.translate.instant(`${base}.features`) as string[];
      const recommended = id === 'pro';
      return { title, description, price, features, button, recommended };
    });
  }
}
