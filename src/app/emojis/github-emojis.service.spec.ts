import { TestBed } from '@angular/core/testing';

import { GithubEmojisService } from './github-emojis.service';

describe('GithubEmojisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubEmojisService = TestBed.get(GithubEmojisService);
    expect(service).toBeTruthy();
  });
});
