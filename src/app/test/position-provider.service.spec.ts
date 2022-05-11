import { TestBed } from '@angular/core/testing';

import { PositionProviderService } from '../service/position-provider.service';

describe('PositionProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PositionProviderService = TestBed.get(PositionProviderService);
    expect(service).toBeTruthy();
  });
});
