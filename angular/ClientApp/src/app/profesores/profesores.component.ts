import { Component, OnInit } from '@angular/core';
import { iProfesor } from './profesor';
import { ProfesoresService } from './profesores.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  profesores: iProfesor[];
  constructor(private profesoresService: ProfesoresService) { }

  ngOnInit() {
    this.cargarData();
  }
  delete(profesor: iProfesor) {
    this.profesoresService.deleteProfesor(profesor.id.toString())
      .subscribe(profesor => this.cargarData(),
        error => console.error(error));
  }

  cargarData() {
    this.profesoresService.getProfesores()
      .subscribe(profesorWS => this.profesores = profesorWS,
        error => console.error(error));
  }
}
