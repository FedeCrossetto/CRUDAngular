import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnosService } from './alumnos/alumnos.service';
import { AlumnosFormComponent } from './alumnos/alumnos-form/alumnos-form.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { MateriasComponent } from './materias/materias.component';
import { ProfesoresFormComponent } from './profesores/profesores-form/profesores-form.component';
import { MateriasFormComponent } from './materias/materias-form/materias-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AlumnosComponent,
    AlumnosFormComponent,
    ProfesoresComponent,
    MateriasComponent,
    ProfesoresFormComponent,
    MateriasFormComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'alumnos', component: AlumnosComponent },
      { path: 'alumnos-agregar', component: AlumnosFormComponent },
      { path: 'alumnos-editar/:id', component: AlumnosFormComponent },
      { path: 'profesores', component: ProfesoresComponent },
      { path: 'profesores-agregar', component: ProfesoresFormComponent },
      { path: 'profesores-editar/:id', component: ProfesoresFormComponent },
      { path: 'materias', component: MateriasComponent },
      { path: 'materias-agregar', component: MateriasFormComponent },
      { path: 'materias-editar/:id', component: MateriasFormComponent },

    ])
  ],
  providers: [AlumnosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
