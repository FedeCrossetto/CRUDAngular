import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasFormComponent } from './materias-form.component';

describe('MateriasFormComponent', () => {
  let component: MateriasFormComponent;
  let fixture: ComponentFixture<MateriasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
