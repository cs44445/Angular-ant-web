import { TestBed } from '@angular/core/testing';

import { AnthGuard } from './anth.guard';

describe('AnthGuard', () => {
  let guard: AnthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AnthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
