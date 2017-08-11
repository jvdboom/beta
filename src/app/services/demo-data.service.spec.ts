import { TestBed, inject } from '@angular/core/testing';

import { DemoDataService } from './demo-data.service';

describe('DemoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemoDataService]
    });
  });

  it('should be created', inject([DemoDataService], (service: DemoDataService) => {
    expect(service).toBeTruthy();
  }));
});
