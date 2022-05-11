import { TestBed } from '@angular/core/testing';

import { SharedCurrentUserProviderService } from '../service/shared-current-user-provider.service';

describe('SharedCurrentUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedCurrentUserProviderService = TestBed.get(SharedCurrentUserProviderService);
    expect(service).toBeTruthy();
  });
});
