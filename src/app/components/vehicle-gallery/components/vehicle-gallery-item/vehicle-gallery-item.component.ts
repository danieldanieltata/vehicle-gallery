import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-gallery-item',
  templateUrl: './vehicle-gallery-item.component.html',
  styleUrls: ['./vehicle-gallery-item.component.css']
})
export class VehicleGalleryItemComponent implements OnInit {

  @Input() carImageUrl: String;

  constructor() { }

  ngOnInit() {
  }

}
