import { TestBed } from '@angular/core/testing';

import { PlaygroundCommunicationService } from './playground-communication.service';

describe('PlaygroundService', () => {
  let service: PlaygroundCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaygroundCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
