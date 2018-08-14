import { Directive, AfterViewInit, ElementRef, Input } from '@angular/core';

import { Observable, Subscription } from 'rxjs/Rx';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/startWith';


interface Position {
	scrollHeight: number;
	clientHeight: number;
	scrollTop: number;
};

const INITIAL_POSITION: Position = {
	scrollHeight: 0,
	clientHeight: 0,
	scrollTop: 0 
}

@Directive({
  selector: '[appPhotosGallery]'
})
export class PhotosGalleryDirective implements AfterViewInit {

  private scrollEvent$;

  private scrollingDown$;

  private inputPhotos$;

  private getPhotosOnScroll$;

  @Input() 
  callbackGetPhotos;

  @Input()
  initialPhotos;

  @Input()
  percentThreshold = 80;

  constructor(private container: ElementRef) { }

  ngAfterViewInit() {

  	this.registerScrollEvent();

  	this.processScrollEvents();

  	this.getCallback();
  }

  private registerScrollEvent() {

  	this.scrollEvent$ = Observable.fromEvent(this.container.nativeElement, 'scroll');

  }

  private processScrollEvents() {
  	this.scrollingDown$ = this.scrollEvent$
  		.map((ev: any): Position => ({
  			scrollHeight: ev.target.scrollHeight,
  			clientHeight: ev.target.clientHeight,
  			scrollTop: ev.target.scrollTop 
  		}))
  		.pairwise()
  		.filter(positions => this.isScrollDown(positions) && this.isThreshold(positions[1]))
  }

  private getCallback() {

  	this.getPhotosOnScroll$ = this.scrollingDown$;

  	if (this.initialPhotos) {
  		this.getPhotosOnScroll$ = this.getPhotosOnScroll$
  			.startWith([INITIAL_POSITION, INITIAL_POSITION]);
  	}

  	this.getPhotosOnScroll$
  		.exhaustMap(() => { return this.callbackGetPhotos(); })
  		.subscribe(() => { });

  }

  private isScrollDown = (positions) => {
  	return positions[0].scrollTop < positions[1].scrollTop;
  }

  private isThreshold = (position) => {
  	return ((position.scrollTop + position.clientHeight) / position.scrollHeight) > (this.percentThreshold / 100);
  }

}
