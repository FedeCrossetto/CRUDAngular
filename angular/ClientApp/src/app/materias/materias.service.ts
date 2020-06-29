import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iMateria } from './materia';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  private apiURL = this.baseUrl + "api/materias";


  constructor(private http: HttpClient, @Inject('BASE_URL')private baseUrl: string) { }

  getMaterias(): Observable<iMateria[]> {
    return this.http.get<iMateria[]>(this.apiURL);
  }

  getMateria(materiaId: string): Observable<iMateria> {
    return this.http.get<iMateria>(this.apiURL + '/' + materiaId);
  }

  createMateria(materia: iMateria): Observable < iMateria > {
    return this.http.post<iMateria>(this.apiURL, materia);
  }
  updateMateria(materia: iMateria): Observable<iMateria> {
    materia.id = +materia.id;
    return this.http.put<iMateria>(this.apiURL + "/" + materia.id.toString(), materia);
  }

  deleteMateria(materiaId: string): Observable<iMateria> {
    return this.http.delete<iMateria>(this.apiURL+"/"+materiaId);
  }
}
