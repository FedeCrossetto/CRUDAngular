import { Component, OnInit } from '@angular/core';
import { iMateria } from './materia';
import { MateriasService } from './materias.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  materias: iMateria[];
  constructor(private materiasService: MateriasService) { }

  ngOnInit() {
    this.cargarData();
  }

  delete(materia: iMateria) {
    this.materiasService.deleteMateria(materia.id.toString())
      .subscribe(materia => this.cargarData(),
      error => console.error(error));
  }

  cargarData() {
    this.materiasService.getMaterias()
      .subscribe(materiasWS => this.materias = materiasWS,
        error => console.error(error));
  }
}
