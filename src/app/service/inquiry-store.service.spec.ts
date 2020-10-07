import { TestBed } from '@angular/core/testing';

import { InquiryStoreService } from './inquiry-store.service';

describe('InquiryStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InquiryStoreService = TestBed.get(InquiryStoreService);
    expect(service).toBeTruthy();
  });
});
