import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoListComponent } from './video/video-list.component';
import {NgSelectModule} from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { AudioComponent } from './audio/audio.component';
import { AVDComponent } from './avd/avd.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    AudioComponent,
    AVDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
