import { TestBed } from '@angular/core/testing';

import { UserEmojisService } from './user-emojis.service';

describe('UserEmojisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserEmojisService = TestBed.get(UserEmojisService);
    expect(service).toBeTruthy();
  });
});
