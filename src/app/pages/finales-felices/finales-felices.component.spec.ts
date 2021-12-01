import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalesFelicesComponent } from './finales-felices.component';

describe('FinalesFelicesComponent', () => {
  let component: FinalesFelicesComponent;
  let fixture: ComponentFixture<FinalesFelicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalesFelicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalesFelicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
