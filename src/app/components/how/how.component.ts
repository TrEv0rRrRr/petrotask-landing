import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-how',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './how.component.html',
  styleUrl: './how.component.css'
})
export class HowComponent {
  steps = [
    {
      title: 'how.steps.step1.title',
      description: 'how.steps.step1.description'
    },
    {
      title: 'how.steps.step2.title',
      description: 'how.steps.step2.description'
    },
    {
      title: 'how.steps.step3.title',
      description: 'how.steps.step3.description'
    },
    {
      title: 'how.steps.step4.title',
      description: 'how.steps.step4.description'
    },
    {
      title: 'how.steps.step5.title',
      description: 'how.steps.step5.description'
    }
  ];
}
