import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProfesionalService } from '../../../services/profesional.service'; // Verifica el path correcto
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
  profesional!: Profesional;
  

  constructor(
    private route: ActivatedRoute,
    private profesionalService: ProfesionalService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    
    this.profesionalService.getProfesionales().subscribe(data => {
      this.profesional = data.find((p: Profesional) => p.id === this.id)!;
    });
  }
}
