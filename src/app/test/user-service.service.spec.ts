import { TestBed } from '@angular/core/testing';

import { UserProviderService } from '../service/user-provider.service';

describe('UserServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserProviderService = TestBed.get(UserProviderService);
    expect(service).toBeTruthy();
  });
});
