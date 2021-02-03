import { TestBed } from '@angular/core/testing';

import { ConfigMingleService } from './config-mingle.service';

describe('ConfigMingleService', () => {
  let service: ConfigMingleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigMingleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
