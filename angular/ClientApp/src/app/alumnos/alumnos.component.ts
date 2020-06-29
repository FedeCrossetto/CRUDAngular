import { Component, OnInit } from '@angular/core';
import { iAlumno } from './alumno';
import { AlumnosService } from './alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  //Traigo el listado de alumnos y lo almaceno en alumnos.
  alumnos: iAlumno[];
  

  constructor(private alumnosService : AlumnosService) { }

  ngOnInit() {
    this.cargarData();
  }
  delete(alumno: iAlumno) {
    this.alumnosService.deleteAlumno(alumno.id.toString())
      .subscribe(alumno => this.cargarData(),
        error => console.error(error));
  }

  cargarData() {
    this.alumnosService.getAlumnos()
      .subscribe(alumnosWS => this.alumnos = alumnosWS,
        error => console.error(error));
  }
}
