import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CurrentUserService } from './current-user.service';

describe('CurrentUserService', () => {
  let service: CurrentUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [CurrentUserService]
    });
    service = TestBed.inject(CurrentUserService);
  });
  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
