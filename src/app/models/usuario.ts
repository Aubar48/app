export interface ItemInventario {
  nombre_del_objeto: string;
  cantidad: number;
  precio: number;
  stock: number;
}

export interface Usuario {
  id: string;
  nombre: string;
  correo: string;
  rol: string;
  gestor_de_inventario?: ItemInventario[];
  producto_mas_utilizado: string;
  frecuencia_de_reposicion: string;
  inventario_name:string;
}
