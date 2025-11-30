import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtensionPanelComponent } from '../../share/extension-panel/extension-panel.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, ExtensionPanelComponent, TranslatePipe],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqItems = [
    {
      question: 'faq.questions.q1.question',
      answer: 'faq.questions.q1.answer'
    },
    {
      question: 'faq.questions.q2.question',
      answer: 'faq.questions.q2.answer'
    },
    {
      question: 'faq.questions.q3.question',
      answer: 'faq.questions.q3.answer'
    },
    {
      question: 'faq.questions.q4.question',
      answer: 'faq.questions.q4.answer'
    },
    {
      question: 'faq.questions.q5.question',
      answer: 'faq.questions.q5.answer'
    },
    {
      question: 'faq.questions.q6.question',
      answer: 'faq.questions.q6.answer'
    }
  ];

}
