import { TestBed } from '@angular/core/testing';

import { WorkerProviderService } from '../service/worker-provider.service';

describe('WorkerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkerProviderService = TestBed.get(WorkerProviderService);
    expect(service).toBeTruthy();
  });
});
