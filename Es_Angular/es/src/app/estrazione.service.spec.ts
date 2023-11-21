import { TestBed } from '@angular/core/testing';

import { EstrazioneService } from './estrazione.service';

describe('EstrazioneService', () => {
  let service: EstrazioneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstrazioneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
