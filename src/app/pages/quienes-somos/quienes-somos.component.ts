import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfesionalService } from '../../services/profesional.service'; // Asegurate de que el path esté correcto

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent implements OnInit {
  profesionales: any[] = [];

  constructor(private profesionalService: ProfesionalService) {}

  ngOnInit(): void {
    this.profesionalService.getProfesionales().subscribe(data => {
      this.profesionales = data;
    });
  }
}
