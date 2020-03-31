import { TestBed } from '@angular/core/testing';

import { PlaygroundSignalRService } from './playground-signalr.service';

describe('PlaygroundService', () => {
  let service: PlaygroundSignalRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaygroundSignalRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
