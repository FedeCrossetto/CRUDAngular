import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MateriasService } from '../materias.service';
import { iMateria } from '../materia';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-materias-form',
  templateUrl: './materias-form.component.html',
  styleUrls: ['./materias-form.component.css']
})
export class MateriasFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private materiasService: MateriasService,
    private router: Router,
    private activatedRoute : ActivatedRoute) { }

  modoEdicion: boolean = false;
  formGroup: FormGroup;
  materiaId: number;

  ngOnInit() {
    this.formGroup = this.fb.group({

      nombre: '',
      profesor: '',
      fechaInicio: '',
      fechaFin: ''
    });
    this.activatedRoute.params.subscribe(params => {
      if (params["id"] == undefined) {
        return;
      }
      this.modoEdicion = true;
      this.materiaId = params["id"];

      this.materiasService.getMateria(this.materiaId.toString())
        .subscribe(materia => this.cargarFormulario(materia),
          error => this.router.navigate(["/materias"]));
    });

  }
  //Me va a cargar el formulario  de Materias con los datos para editarlo.
  cargarFormulario(materia: iMateria) {

    var dp = new DatePipe(navigator.language);
    var format = "yyyy-MM-dd";

    this.formGroup.patchValue({
      id: materia.id,
      nombre: materia.nombre,
      profesor: materia.profesor,
      fechaInicio: dp.transform(materia.fechaInicio, format),
      fechaFin: dp.transform(materia.fechaFin, format)
    });
  }

  save() {
    let materia: iMateria = Object.assign({}, this.formGroup.value);
    console.table(materia);

    if (this.modoEdicion) {
      //Editar registro
      materia.id = this.materiaId;
      this.materiasService.updateMateria(materia)
        .subscribe(materia => this.onSaveSuccess(),
          error => this.router.navigate(["/materias"]));
    }
    else {
      //Agregar registro
    this.materiasService.createMateria(materia)
      .subscribe(materia => this.onSaveSuccess(),
        error => this.router.navigate(["/materias"]));
    }
  }

  onSaveSuccess() {
    this.router.navigate(["/materias"]);
  }
}
