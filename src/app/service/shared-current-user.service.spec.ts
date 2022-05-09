import { TestBed } from '@angular/core/testing';

import { SharedCurrentUserService } from './shared-current-user.service';

describe('SharedCurrentUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedCurrentUserService = TestBed.get(SharedCurrentUserService);
    expect(service).toBeTruthy();
  });
});
