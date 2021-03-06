import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula';

import { HttpClientModule } from '@angular/common/http';


import { VehicleGalleryComponent } from './components/vehicle-gallery/vehicle-gallery.component';
import { VehicleGalleryItemComponent } from './components/vehicle-gallery/components/vehicle-gallery-item/vehicle-gallery-item.component';
import { EditorImageCardComponent } from './components/editor-image-card/editor-image-card.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { DataService } from './shared/services/data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    VehicleGalleryComponent,
    VehicleGalleryItemComponent,
    EditorImageCardComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbModule.forRoot(),
    DragulaModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
