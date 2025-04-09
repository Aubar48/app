import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Profesional } from '../models/profesional';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalService {

  private apiUrl = 'http://localhost:3000/profesionales';

  constructor(private http: HttpClient) { }

  getProfesionales(): Observable<Profesional[]> {
    return this.http.get<Profesional[]>(this.apiUrl).pipe(
      catchError(this.handleError('obtener profesionales'))
    );
  }

  getProfesionalById(id: string): Observable<Profesional> {
    return this.http.get<Profesional>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError(`obtener el profesional con id ${id}`))
    );
  }

  // 👇 Función privada reutilizable para manejo de errores
  private handleError(context: string) {
    return (error: any) => {
      console.error(`Error al ${context}:`, error);
      return throwError(() => new Error(`No se pudo ${context}`));
    };
  }
}
