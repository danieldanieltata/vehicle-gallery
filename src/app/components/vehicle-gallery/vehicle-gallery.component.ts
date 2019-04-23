import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-gallery',
  templateUrl: './vehicle-gallery.component.html',
  styleUrls: ['./vehicle-gallery.component.css']
})
export class VehicleGalleryComponent implements OnInit {

  @Input() images;

  constructor() { }

  ngOnInit() {
  }

}
