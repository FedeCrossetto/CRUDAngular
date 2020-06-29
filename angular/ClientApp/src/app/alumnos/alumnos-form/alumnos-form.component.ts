import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { iAlumno } from '../alumno';
import { AlumnosService } from '../alumnos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-alumnos-form',
  templateUrl: './alumnos-form.component.html',
  styleUrls: ['./alumnos-form.component.css']
})
export class AlumnosFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private alumnosService: AlumnosService,
              private router: Router,
              private activatedRoute : ActivatedRoute ) { }

  modoEdicion: boolean = false;
  formGroup: FormGroup;
  alumnoId: number;


  ngOnInit() {
    this.formGroup = this.fb.group({
      nombre: '',
      apellido: '',
      telefono: '',
      correo: '',
      fechaIngreso: ''
    });

    this.activatedRoute.params.subscribe(params => {
      if (params["id"] == undefined) {
        return;
      }
      {
      this.modoEdicion = true;
      this.alumnoId = params["id"];
      this.alumnosService.getAlumno(this.alumnoId.toString())
        .subscribe(alumno => this.cargarFormulario(alumno),
          error => this.router.navigate(["/alumnos"]));
      }
    
   });

  }
   //Me va a cargar el formulario  de Alumnos con los datos para editarlo.
  cargarFormulario(alumno: iAlumno) {

    var dp = new DatePipe(navigator.language);
    var format = "yyyy-MM-dd";

    this.formGroup.patchValue({
      nombre: alumno.nombre,
      apellido: alumno.apellido,
      telefono: alumno.telefono,
      correo: alumno.correo,
      fechaIngreso: dp.transform(alumno.fechaIngreso, format)
    });
}

  save() {
    let alumno: iAlumno = Object.assign({}, this.formGroup.value);
    console.table(alumno);

    if (this.modoEdicion) {
      //Editar registro
      alumno.id = this.alumnoId;
      this.alumnosService.updateAlumno(alumno)
        .subscribe(alumno => this.onSaveSuccess(),
          error => console.error(error));

    }
    else {
      //Agregar registro
      this.alumnosService.createAlumnos(alumno)
        .subscribe(alumno => this.onSaveSuccess(),
          error => console.error(error));
    }
  }

  onSaveSuccess() {
    this.router.navigate(["/alumnos"]);
  }

}
