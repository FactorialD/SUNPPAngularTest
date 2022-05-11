import { TestBed } from '@angular/core/testing';

import { DepartmentProviderService } from '../service/department-provider.service';

describe('DepartmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepartmentProviderService = TestBed.get(DepartmentProviderService);
    expect(service).toBeTruthy();
  });
});
