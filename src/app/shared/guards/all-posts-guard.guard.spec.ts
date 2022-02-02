import { TestBed } from '@angular/core/testing';

import { AllPostsGuardGuard } from './all-posts-guard.guard';

describe('AllPostsGuardGuard', () => {
  let guard: AllPostsGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AllPostsGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
