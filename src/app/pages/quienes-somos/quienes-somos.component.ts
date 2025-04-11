import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsuarioService } from '../../services/profesional.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent implements OnInit {
  usuarios: Usuario[] = [];
  error: string = '';

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
      },
      error: (err) => {
        console.error('Error al obtener los usuarios:', err);
        this.error = 'No se pudieron cargar los usuarios. Intenta más tarde.';
      }
    });
  }
}
