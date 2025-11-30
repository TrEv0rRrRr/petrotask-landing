import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-what',
  imports: [
    TranslatePipe
  ],
  templateUrl: './what.component.html',
  styleUrl: './what.component.css'
})
export class WhatComponent {

}
