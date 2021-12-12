import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAnimalesProtectoraComponent } from './lista-animales-protectora.component';

describe('ListaAnimalesProtectoraComponent', () => {
  let component: ListaAnimalesProtectoraComponent;
  let fixture: ComponentFixture<ListaAnimalesProtectoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAnimalesProtectoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAnimalesProtectoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
