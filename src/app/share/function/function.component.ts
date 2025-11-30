import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-function',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './function.component.html',
  styleUrl: './function.component.css'
})
export class FunctionComponent {
  @Input() title: string = 'Característica';
  @Input() functionText: string = 'Descripción de la funcionalidad ofrecida por PetroTask.';
  @Input() accentColor: string = '#008B64';
}
