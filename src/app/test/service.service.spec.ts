import { TestBed } from '@angular/core/testing';

import { ServiceProviderService } from '../service/service-provider.service';

describe('ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceProviderService = TestBed.get(ServiceProviderService);
    expect(service).toBeTruthy();
  });
});
