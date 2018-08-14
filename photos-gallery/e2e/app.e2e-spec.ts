import { PhotosGalleryPage } from './app.po';

describe('photos-gallery App', () => {
  let page: PhotosGalleryPage;

  beforeEach(() => {
    page = new PhotosGalleryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
