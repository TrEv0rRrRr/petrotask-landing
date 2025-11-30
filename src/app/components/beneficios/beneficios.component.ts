import { Component } from '@angular/core';
import { BenefitComponent } from '../../share/benefit/benefit.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-beneficios',
  standalone: true,
  imports: [BenefitComponent, TranslatePipe],
  templateUrl: './beneficios.component.html',
  styleUrl: './beneficios.component.css'
})
export class BeneficiosComponent {
  benefits = [
    {
      image: '../../../assets/check.png',
      title: 'benefits.items.centralization.title',
      description: 'benefits.items.centralization.description'
    },
    {
      image: '../../../assets/tools.png',
      title: 'benefits.items.collaboration.title',
      description: 'benefits.items.collaboration.description'
    },
    {
      image: '../../../assets/person.png',
      title: 'benefits.items.reporting.title',
      description: 'benefits.items.reporting.description'
    }
  ];
}
