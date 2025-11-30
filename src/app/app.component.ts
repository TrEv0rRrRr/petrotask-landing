import { Component } from '@angular/core';
import {
  FuncionalidadesPetrotaskComponent
} from './components/funcionalidades-petrotask/funcionalidades-petrotask.component';
import {PresentationComponent} from './components/presentation/presentation.component';
import {BeneficiosComponent} from './components/beneficios/beneficios.component';
import {WhatComponent} from './components/what/what.component';
import {WhyComponent} from './components/why/why.component';
import {HowComponent} from './components/how/how.component';
import {FaqComponent} from './components/faq/faq.component';
import {HeaderComponent} from './components/header/header.component';
import { CommonModule } from '@angular/common';
import {FooterComponent} from './components/footer/footer.component';
import {PricingComponent} from './components/pricing/pricing.component';
import {ContactComponent} from './components/contact/contact.component';
import {TranslateService} from '@ngx-translate/core';
import {LanguageSwitcherComponent} from './components/language-switcher/language-switcher.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PresentationComponent,
    FuncionalidadesPetrotaskComponent,
    BeneficiosComponent,
    WhatComponent,
    WhyComponent,
    HowComponent,
    FaqComponent,
    HeaderComponent,
    FooterComponent,
    PricingComponent,
    ContactComponent,
    LanguageSwitcherComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'petrotask';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
