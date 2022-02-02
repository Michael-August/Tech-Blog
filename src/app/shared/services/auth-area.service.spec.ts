import { TestBed } from '@angular/core/testing';

import { AuthAreaService } from './auth-area.service';

describe('AuthAreaService', () => {
  let service: AuthAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
