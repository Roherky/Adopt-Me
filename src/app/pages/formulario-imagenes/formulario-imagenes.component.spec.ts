import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioImagenesComponent } from './formulario-imagenes.component';

describe('FormularioImagenesComponent', () => {
  let component: FormularioImagenesComponent;
  let fixture: ComponentFixture<FormularioImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioImagenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
