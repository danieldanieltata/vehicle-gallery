import { Component, OnInit, OnDestroy } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';

import { VehicleObjectModel } from './shared/models/vehicle-object';

import { DataService } from './shared/services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})


/* 
----- TODO ------
1. Fix the caruosel screen size scaling bug 
2. Use IndexDB instead of localStorage because the localStorage is synchronous
3. Move the drag and drop to a component
4. Make the 'Make a new gallery' feature
5. Remove the random vehicle photo and make a uplaod feature with firebase
6. Add delete saved set button 
*/

export class AppComponent implements OnInit, OnDestroy{

  images: VehicleObjectModel[] = [];

  dragularDropSubsciption$  : Subscription;

  constructor(public _dragulaService: DragulaService, public _dataService: DataService){ 

    // This is the dragula service 
    this._dragulaService.createGroup('vehicles', {
      moves: (el, container, handle) => { return handle.className.includes('handle') }
    });

    // Drop subscription, triggred when the user droped the image
    this.dragularDropSubsciption$ = this._dragulaService.drop().subscribe(() => {
      this.rePosition();
    });

  }

  ngOnInit(){
    if(typeof localStorage.getItem('imagesCopy') == 'string')
      this.images = JSON.parse(localStorage.getItem('imagesCopy'));  
    else{
      this._dataService.getRandomVehicleImage().subscribe((val: any) => this.images.push({position: 0, url: val.urls.regular}));
      localStorage.setItem('imagesCopy', JSON.stringify(this.images));
    }
  }

  /* Clone image by the editors component */
  public cloneImage(imageUrlToClone, index){
    let clonedImageIndex = index + 1;

    // Cloning image by putting a 'Dummy position' and then re-positioning
    this.images.splice(clonedImageIndex, 0, { position: -1, url: imageUrlToClone });
    this.rePosition();
  }
  
  /* Delete image triggered by the emitter in editors component */
  public deleteImage(index){
    this.images.splice(index, 1);
    this.rePosition();
  }

  /* Reset the images set */
  public resetSet(){
    this.images = JSON.parse(localStorage.getItem('imagesCopy'));
  }

  /* Set a new default set */
  public setAsDefaultSet(){
    localStorage.setItem('imagesCopy', JSON.stringify(this.images));
  }

  /* Add new random image from the api */
  public addNewRandomImage(){
    this._dataService.getRandomVehicleImage().subscribe((val: any) => this.images.push({ position: -1, url: val.urls.regular }));
    this.rePosition();
  }


  /* This function re-positioning the images set when needed */
  public rePosition(){
    if(!this.images) return;

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
