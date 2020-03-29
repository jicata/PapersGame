import { TestBed } from '@angular/core/testing';

import { CreatePapersService } from './create-papers.service';

describe('CreatePapersService', () => {
  let service: CreatePapersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatePapersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
