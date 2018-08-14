import { TestBed, inject } from '@angular/core/testing';

import { GalleryServiceService } from './gallery-service.service';

describe('GalleryServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GalleryServiceService]
    });
  });

  it('should ...', inject([GalleryServiceService], (service: GalleryServiceService) => {
    expect(service).toBeTruthy();
  }));
});
