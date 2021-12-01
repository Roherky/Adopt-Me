import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFinalesFelicesComponent } from './formulario-finales-felices.component';

describe('FormularioFinalesFelicesComponent', () => {
  let component: FormularioFinalesFelicesComponent;
  let fixture: ComponentFixture<FormularioFinalesFelicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioFinalesFelicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioFinalesFelicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
