import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iAlumno } from './alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private apiURL = this.baseUrl + "api/alumnos";

  //Consultar alumnos .
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getAlumnos(): Observable<iAlumno[]> {
    return this.http.get<iAlumno[]>(this.apiURL);
  }

  getAlumno(alumnoId: string): Observable<iAlumno> {
    return this.http.get<iAlumno>(this.apiURL + '/' + alumnoId);
  }

  //Crear alumno.
  createAlumnos(alumno: iAlumno): Observable<iAlumno> {
    return this.http.post<iAlumno>(this.apiURL, alumno);
  }

  updateAlumno(alumno: iAlumno): Observable<iAlumno> {
    alumno.id = +alumno.id;
    return this.http.put<iAlumno>(this.apiURL + "/" +alumno.id.toString(), alumno);
  }

  deleteAlumno(alumnoId: string): Observable<iAlumno> {
    return this.http.delete<iAlumno>(this.apiURL + "/" + alumnoId);
  }
}
