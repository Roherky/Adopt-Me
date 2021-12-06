import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordarContrasenyaComponent } from './recordar-contrasenya.component';

describe('RecordarContrasenyaComponent', () => {
  let component: RecordarContrasenyaComponent;
  let fixture: ComponentFixture<RecordarContrasenyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordarContrasenyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordarContrasenyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
