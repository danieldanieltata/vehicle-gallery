import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() setAsDefaultSetEmitter = new EventEmitter();
  @Output() resetSetEmitter         = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setAsDefaultSet(){
    this.setAsDefaultSetEmitter.emit();
  }

  resetSet(){
    this.resetSetEmitter.emit();
  }
}
