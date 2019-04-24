import { Component, OnInit, OnDestroy } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';

import { VehicleObjectModel } from './shared/models/vehicle-object';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'vehicle-gallery';

  images: VehicleObjectModel[] = [
    { position: 0, url: 'assets/cars-images/1.jpg' },
    { position: 1, url: 'assets/cars-images/2.jpg' }
  ]

  dragularDropSubsciption$  : Subscription;

  constructor(public _dragulaService: DragulaService){ 
    // This is the dragula service 
    this._dragulaService.createGroup('vehicles', {
      removeOnSpill: false,
    });

    // Drop subscription, triggred when the user droped the image
    this.dragularDropSubsciption$ = this._dragulaService.drop().subscribe(() => {
      this.rePosition();
    });

  }

  ngOnInit(){
    // TODO change to indexDB or something, the localStorage is synchronous
    if(localStorage.getItem('imagesCopy'))
      this.images = JSON.parse(localStorage.getItem('imagesCopy'));
    else
      localStorage.setItem('imagesCopy', JSON.stringify(this.images));
  }

  // Clone image by the editors component
  public cloneImage(imageUrlToClone, index){
    let clonedImageIndex = index + 1;

    // Cloning image by putting a 'Dummy position' and then re-positioning
    this.images.splice(clonedImageIndex, 0, { position: -1, url: imageUrlToClone});
    this.rePosition();
  }
  
  // Delete image triggered by the emitter in editors component
  public deleteImage(index){
    this.images.splice(index, 1);
    this.rePosition();
  }

  // Reset the images set 
  public resetSet(){
    this.images = JSON.parse(localStorage.getItem('imagesCopy'));
  }

  // Set a new default set 
  public setAsDefaultSet(){
    localStorage.setItem('imagesCopy', JSON.stringify(this.images));
  }

  // This function re-positioning the images set when needed
  public rePosition(){
    let position = 0;

    this.images.forEach((imageObject) => {
      imageObject.position = position;
      position = position + 1;
    });

  }

  ngOnDestroy(){
    this.dragularDropSubsciption$.unsubscribe();
  }
}
