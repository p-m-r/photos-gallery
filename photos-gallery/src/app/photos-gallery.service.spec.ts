import { TestBed, inject } from '@angular/core/testing';

import { PhotosGalleryService } from './photos-gallery.service';

describe('PhotosGalleryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotosGalleryService]
    });
  });

  it('should ...', inject([PhotosGalleryService], (service: PhotosGalleryService) => {
    expect(service).toBeTruthy();
  }));
});
