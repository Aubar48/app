import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profesional',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profesional.component.html',
  styleUrls: ['./profesional.component.css']
})
export class ProfesionalComponent {
  id!: string;
  profesional: any;

  profesionales = [
    {
      id: '1',
      nombre: 'Lucía Martínez',
      especialidad: 'Psicología',
      experiencia: '5 años',
      descripcion: 'Apasionada por la salud mental y el bienestar emocional.'
    },
    {
      id: '2',
      nombre: 'Carlos Gómez',
      especialidad: 'Nutrición',
      experiencia: '7 años',
      descripcion: 'Enfocado en ayudar a las personas a mejorar sus hábitos alimenticios.'
    },
    {
      id: '3',
      nombre: 'María López',
      especialidad: 'Entrenamiento físico',
      experiencia: '10 años',
      descripcion: 'Especialista en entrenamiento funcional y de fuerza.'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.profesional = this.profesionales.find(p => p.id === this.id);
  }
}
