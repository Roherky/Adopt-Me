import { TestBed } from '@angular/core/testing';

import { FinalFelizService } from './final-feliz.service';

describe('FinalFelizService', () => {
  let service: FinalFelizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinalFelizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
