import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalService {

  private apiUrl = 'http://localhost:3000/profesionales'; // URL del JSON Server

  constructor(private http: HttpClient) { }

  getProfesionales(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getProfesionalById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
