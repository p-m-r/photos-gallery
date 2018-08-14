import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const FLICKR_URL = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b58ac82567c0526d9d82a54b2d3db276&format=json&per_page=10&tags=dog&extras=description,date_taken,owner_name";

@Injectable()
export class PhotosGalleryService {

  constructor(private http: Http) { }

  getPhotos() {
  	return this.http.get(FLICKR_URL);
  }
}
