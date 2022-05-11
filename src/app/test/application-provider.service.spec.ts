import { TestBed } from '@angular/core/testing';

import { ApplicationProviderService } from '../service/application-provider.service';

describe('ApplicationProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicationProviderService = TestBed.get(ApplicationProviderService);
    expect(service).toBeTruthy();
  });
});
