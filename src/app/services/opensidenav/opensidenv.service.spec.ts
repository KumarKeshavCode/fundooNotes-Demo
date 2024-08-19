import { TestBed } from '@angular/core/testing';

import { OpensidenvService } from './opensidenv.service';

describe('OpensidenvService', () => {
  let service: OpensidenvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpensidenvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
