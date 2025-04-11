import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../services/profesional.service';
import { Usuario, ItemInventario } from '../../../models/usuario';


@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profesional.component.html',
  styleUrls: ['./profesional.component.css']
})
export class UsuarioComponent implements OnInit {
  id!: string;
  usuario!: Usuario | null;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private location: Location
  ) {}

  ngOnInit() {
  

    const id = this.route.snapshot.paramMap.get('id') || '';

this.usuarioService.getUsuarios().subscribe({
  next: (data) => {
    const encontrado = data.find((u: Usuario) => u.id.toString() === id);

    if (encontrado) {
      const inventarioMapeado: ItemInventario[] = encontrado.gestor_de_inventario?.map((item: any) => ({
        nombre_del_objeto: item.nombre_del_objeto,
        cantidad: item.cantidad,
        precio: item.precio,
        stock: item.stock
      })) || [];

      this.usuario = {
        ...encontrado,
        gestor_de_inventario: inventarioMapeado
      };
    } else {
      this.error = 'No se encontró el usuario con ese ID.';
    }
  },
  error: (err) => {
    console.error('Error al obtener el usuario:', err);
    this.error = 'Error al cargar el usuario. Intenta más tarde.';
  }
});
  }
  volver() {
    this.location.back();
  }
  
}
