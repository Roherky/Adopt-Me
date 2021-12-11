import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPerfilProtectoraComponent } from './editar-perfil-protectora.component';

describe('EditarPerfilProtectoraComponent', () => {
  let component: EditarPerfilProtectoraComponent;
  let fixture: ComponentFixture<EditarPerfilProtectoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPerfilProtectoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPerfilProtectoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
