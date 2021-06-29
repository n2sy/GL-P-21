import { TestBed } from '@angular/core/testing';

import { GrerServersService } from './grer-servers.service';

describe('GrerServersService', () => {
  let service: GrerServersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrerServersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
