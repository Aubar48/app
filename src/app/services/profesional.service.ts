import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profesional } from '../models/profesional';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalService {

  private apiUrl = 'http://localhost:3000/profesionales'; // URL del JSON Server

  constructor(private http: HttpClient) { }

  getProfesionales(): Observable<Profesional[]> {
    return this.http.get<Profesional[]>(this.apiUrl);
  }

  getProfesionalById(id: string): Observable<Profesional> {
    return this.http.get<Profesional>(`${this.apiUrl}/${id}`);
  }
}
