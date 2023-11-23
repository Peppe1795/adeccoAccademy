import { TestBed } from '@angular/core/testing';

import { EventiServiceService } from './eventi-service.service';

describe('EventiServiceService', () => {
  let service: EventiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
