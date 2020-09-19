import { TestBed } from '@angular/core/testing';

import { UnreguserService } from './unreguser.service';

describe('UnreguserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnreguserService = TestBed.get(UnreguserService);
    expect(service).toBeTruthy();
  });
});
