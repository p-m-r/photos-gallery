import { Component } from '@angular/core';
import { PhotosGalleryService } from './photos-gallery.service';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos: Array<any> = [];
  
  callbackGetPhotos;

  constructor(private photosGalleryService: PhotosGalleryService) {
  	
  	this.callbackGetPhotos = this.getPhotos.bind(this);

  }

  getPhotos() {
  	return this.photosGalleryService.getPhotos().do(this.processPhotos);
  }

  private processPhotos = (photos) => {

  	photos = photos.text().replace("jsonFlickrApi(", "");
  	photos = photos.slice(0, photos.length - 1);
  	photos = JSON.parse(photos);
  	
  	this.photos = this.photos.concat(photos.photos.photo);
  	console.log(this.photos);

  }

}
