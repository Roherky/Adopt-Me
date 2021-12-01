import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalDetalladoProtectoraComponent } from './animal-detallado-protectora.component';

describe('AnimalDetalladoProtectoraComponent', () => {
  let component: AnimalDetalladoProtectoraComponent;
  let fixture: ComponentFixture<AnimalDetalladoProtectoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalDetalladoProtectoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalDetalladoProtectoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
