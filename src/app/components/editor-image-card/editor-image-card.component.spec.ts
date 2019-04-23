import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorImageCardComponent } from './editor-image-card.component';

describe('EditorImageCardComponent', () => {
  let component: EditorImageCardComponent;
  let fixture: ComponentFixture<EditorImageCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorImageCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
