import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { iProfesor } from '../profesor';
import { ProfesoresService } from '../profesores.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-profesores-form',
  templateUrl: './profesores-form.component.html',
  styleUrls: ['./profesores-form.component.css']
})
export class ProfesoresFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private profesoresService: ProfesoresService,
    private router: Router,
    private activatedRoute : ActivatedRoute) { }

  modoEdicion: boolean = false;
  formGroup: FormGroup;
  profesorId: number;

  ngOnInit() {
    this.formGroup = this.fb.group({
      nombre: '',
      apellido: '',
      materias: ''
    });
    this.activatedRoute.params.subscribe(params => {
      if (params["id"] == undefined) {
        return;
      }
      this.modoEdicion = true;
      this.profesorId = params["id"];

      this.profesoresService.getProfesor(this.profesorId.toString())
        .subscribe(profesor => this.cargarFormulario(profesor),
          error => this.router.navigate(["/profesores"]));
    });
  }
    //Me va a cargar el formulario  de Profesor con los datos para editarlo.
  cargarFormulario(profesor: iProfesor) {

    this.formGroup.patchValue({
      id: profesor.id,
      nombre: profesor.nombre,
      apellido: profesor.apellido,
      materias: profesor.materias
    });
  }
    save() {
      let profesor: iProfesor = Object.assign({}, this.formGroup.value);
      console.table(profesor);

      if (this.modoEdicion) {
        //Editar registro
        profesor.id = this.profesorId;
        this.profesoresService.updateProfesor(profesor)
          .subscribe(profesor => this.onSaveSuccess(),
            error => console.error(error));
      }
      else {
        //Agregar registro
        this.profesoresService.createProfesor(profesor)
          .subscribe(profesor => this.onSaveSuccess(),
            error => console.error(error));
      }

    }

    onSaveSuccess() {
      this.router.navigate(["/profesores"]);
    }
}
