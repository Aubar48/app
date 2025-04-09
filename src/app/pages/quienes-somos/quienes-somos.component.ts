import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfesionalService } from '../../services/profesional.service';
import { Profesional } from '../../models/profesional';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent implements OnInit {
  profesionales: Profesional[] = [];
  error: string = '';

  constructor(private profesionalService: ProfesionalService) {}

  ngOnInit(): void {
    this.profesionalService.getProfesionales().subscribe({
      next: (data) => {
        this.profesionales = data;
      },
      error: (err) => {
        console.error('Error al obtener los profesionales:', err);
        this.error = 'No se pudieron cargar los profesionales. Intenta más tarde.';
      }
    });
  }
}
