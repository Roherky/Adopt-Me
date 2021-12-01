import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAnyadirNoticiasComponent } from './formulario-anyadir-noticias.component';

describe('FormularioAnyadirNoticiasComponent', () => {
  let component: FormularioAnyadirNoticiasComponent;
  let fixture: ComponentFixture<FormularioAnyadirNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAnyadirNoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAnyadirNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
