import { TestBed } from '@angular/core/testing';

import { ExpdeaGuard } from './expdea.guard';

describe('ExpdeaGuard', () => {
  let guard: ExpdeaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExpdeaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
