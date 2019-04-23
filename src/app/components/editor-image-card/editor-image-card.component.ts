import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editor-image-card',
  templateUrl: './editor-image-card.component.html',
  styleUrls: ['./editor-image-card.component.css']
})
export class EditorImageCardComponent implements OnInit {

  @Input() imageUrl: String;

  @Output() clone   = new EventEmitter<String>();
  @Output() delete  = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // Clone image emitter
  cloneImage(){
    this.clone.emit(this.imageUrl);
  }

  // Delete image emitter
  deleteImage(){
    this.delete.emit();
  }

}
