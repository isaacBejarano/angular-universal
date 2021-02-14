import { TestBed } from '@angular/core/testing';

import { TitleAndMetaService } from './title-and-meta.service';

describe('TitleAndMetaService', () => {
  let service: TitleAndMetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitleAndMetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
