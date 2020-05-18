import { TestBed } from '@angular/core/testing';

import { InfoClimaService } from './info-clima.service';

describe('InfoClimaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoClimaService = TestBed.get(InfoClimaService);
    expect(service).toBeTruthy();
  });
});
