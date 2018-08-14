;
import { PhotosGalleryDirective } from './photos-gallery.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PhotosGalleryService } from './photos-gallery.service';

@NgModule({
  declarations: [
    AppComponent,
    PhotosGalleryDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PhotosGalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
