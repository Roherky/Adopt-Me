import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyadirAnimalesComponent } from './anyadir-animales.component';

describe('AnyadirAnimalesComponent', () => {
  let component: AnyadirAnimalesComponent;
  let fixture: ComponentFixture<AnyadirAnimalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnyadirAnimalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnyadirAnimalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
