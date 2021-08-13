import { TestBed } from '@angular/core/testing';

import { ModuleGuardGuard } from './module-guard.guard';

describe('ModuleGuardGuard', () => {
  let guard: ModuleGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ModuleGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
