import { Component } from '@angular/core';
import { FunctionComponent } from '../../share/function/function.component';
import { CommonModule } from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-funcionalidades-petrotask',
  standalone: true,
  imports: [FunctionComponent, CommonModule, TranslatePipe],
  templateUrl: './funcionalidades-petrotask.component.html',
  styleUrl: './funcionalidades-petrotask.component.css'
})
export class FuncionalidadesPetrotaskComponent {

  funcionalidades = [
    {
      title: 'functions.list.item1.title',
      description: 'functions.list.item1.description',
      accentColor: '#FF8C29' // Naranja brillante
    },
    {
      title: 'functions.list.item2.title',
      description: 'functions.list.item2.description',
      accentColor: '#F86F03' // Naranja intenso
    },
    {
      title: 'functions.list.item3.title',
      description: 'functions.list.item3.description',
      accentColor: '#FFA41B' // Naranja amarillento
    },
    {
      title: 'functions.list.item4.title',
      description: 'functions.list.item4.description',
      accentColor: '#FF5B22' // Naranja rojizo
    },
    {
      title: 'functions.list.item5.title',
      description: 'functions.list.item5.description',
      accentColor: '#E14D2A' // Rojo anaranjado
    },
    {
      title: 'functions.list.item6.title',
      description: 'functions.list.item6.description',
      accentColor: '#FD841F' // Naranja cálido
    },
    {
      title: 'functions.list.item7.title',
      description: 'functions.list.item7.description',
      accentColor: '#FF7700' // Naranja estándar
    }
  ];
}
