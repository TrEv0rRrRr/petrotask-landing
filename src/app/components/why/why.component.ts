import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-why',
  imports: [
    TranslatePipe
  ],
  templateUrl: './why.component.html',
  styleUrl: './why.component.css'
})
export class WhyComponent {
  reasons = [
    'Las industrias que operan en zonas remotas como la minera, petrolera o energética enfrentan diariamente una serie de desafíos logísticos complejos. Entornos hostiles e impredecibles, condiciones climáticas cambiantes, equipos técnicos expuestos a fallos, y la rotación constante del personal hacen que mantener la continuidad operativa sea una tarea difícil.',
    'A esto se suma la falta de herramientas adecuadas para ofrecer trazabilidad, visibilidad en tiempo real y una planificación realmente adaptable.',
    'En este contexto nace PetroTask, como respuesta a la necesidad urgente de ordenar el caos operativo y ofrecer una solución capaz de centralizar la gestión logística, incluso en los escenarios más exigentes.'
  ];
}
