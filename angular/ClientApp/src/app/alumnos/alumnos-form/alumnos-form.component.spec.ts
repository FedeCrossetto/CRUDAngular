import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosFormComponent } from './alumnos-form.component';

describe('AlumnosFormComponent', () => {
  let component: AlumnosFormComponent;
  let fixture: ComponentFixture<AlumnosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
