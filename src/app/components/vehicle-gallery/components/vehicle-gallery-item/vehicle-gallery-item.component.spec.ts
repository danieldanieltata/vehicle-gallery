import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleGalleryItemComponent } from './vehicle-gallery-item.component';

describe('VehicleGalleryItemComponent', () => {
  let component: VehicleGalleryItemComponent;
  let fixture: ComponentFixture<VehicleGalleryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleGalleryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleGalleryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
