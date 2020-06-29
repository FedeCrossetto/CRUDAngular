import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iProfesor } from './profesor';


@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  private apiURL = this.baseUrl + "api/profesores";

  constructor(private http: HttpClient, @Inject('BASE_URL')private baseUrl: string) { }

  getProfesores(): Observable<iProfesor[]> {
    return this.http.get<iProfesor[]>(this.apiURL);
  }

  getProfesor(profesorId: string): Observable<iProfesor> {
    return this.http.get<iProfesor>(this.apiURL + '/' + profesorId);
  }

  createProfesor(profesor: iProfesor): Observable<iProfesor> {
    return this.http.post<iProfesor>(this.apiURL, profesor);
  }

  updateProfesor(profesor: iProfesor): Observable<iProfesor> {
    profesor.id = +profesor.id;
    return this.http.put<iProfesor>(this.apiURL + "/" + profesor.id, profesor);
  }

  deleteProfesor(profesorId: string): Observable<iProfesor> {
    return this.http.delete<iProfesor>(this.apiURL + "/" + profesorId);
  }
}
