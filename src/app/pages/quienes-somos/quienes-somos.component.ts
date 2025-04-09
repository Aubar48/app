import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quienes-somos',
  imports: [RouterModule, CommonModule],
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent {
  profesionales = [
    { id: 1, nombre: 'Squirtle', btn:'btn-primary' },
    { id: 2, nombre: 'Bulbasaur', btn:'btn-success' },
    { id: 3, nombre: 'Charmander', btn:'btn-danger' }
  ];
}
