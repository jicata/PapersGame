import { TestBed } from '@angular/core/testing';

import { BaseSignalRService } from './base-signalr.service';

describe('SignalrService', () => {
  let service: BaseSignalRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseSignalRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
