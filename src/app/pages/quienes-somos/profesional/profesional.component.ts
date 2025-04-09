import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profesional',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './profesional.component.html',
  styleUrls: ['./profesional.component.css']
})
export class ProfesionalComponent {
  id!: string;
  profesional: any;

  profesionales = [
    {
      id: '1',
      photo:'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png',
      nombre: 'Squartle',
      especialidad: 'Agua',
      experiencia: '5',
      descripcion: 'pokemon de agua'
    },
    {
      id: '2',
      photo:'https://pm1.aminoapps.com/7037/93b9f10ff981f0c4a92943074afaf55e7e689dder1-598-640v2_uhq.jpg',
      nombre: 'Bulbasaur',
      especialidad: 'Planta',
      experiencia: '5',
      descripcion: 'pokemon de planta'
    },
    {
      id: '3',
      photo:'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/56/latest/20200307023245/Charmander.png/800px-Charmander.png',
      nombre: 'Charmander',
      especialidad: 'Fuego',
      experiencia: '5',
      descripcion: 'pokemon de fuego.'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.profesional = this.profesionales.find(p => p.id === this.id);
  }
}
