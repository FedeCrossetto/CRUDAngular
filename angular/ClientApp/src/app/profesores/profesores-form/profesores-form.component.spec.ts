import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresFormComponent } from './profesores-form.component';

describe('ProfesoresFormComponent', () => {
  let component: ProfesoresFormComponent;
  let fixture: ComponentFixture<ProfesoresFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesoresFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
