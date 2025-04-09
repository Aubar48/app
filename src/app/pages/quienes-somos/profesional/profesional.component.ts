import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProfesionalService } from '../../../services/profesional.service';
import { Profesional } from '../../../models/profesional';

@Component({
  selector: 'app-profesional',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './profesional.component.html',
  styleUrls: ['./profesional.component.css']
})
export class ProfesionalComponent implements OnInit {
  id!: string;
  profesional!: Profesional | null;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private profesionalService: ProfesionalService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') || '';
    const nombre = this.route.snapshot.paramMap.get('nombre')?.toLowerCase() || '';
  
    this.profesionalService.getProfesionales().subscribe({
      next: (data) => {
        const encontrado = data.find((p: Profesional) =>
          p.id === id && p.nombre.toLowerCase() === nombre
        );
  
        if (encontrado) {
          this.profesional = encontrado;
        } else {
          this.error = 'No se encontró el profesional con ese nombre y ID.';
        }
      },
      error: (err) => {
        console.error('Error al obtener el profesional:', err);
        this.error = 'Error al cargar el profesional. Intenta más tarde.';
      }
    });
  }
  
}
