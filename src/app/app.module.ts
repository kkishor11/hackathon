import { TrackingService } from './tracking.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';


import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TimelineDetailComponent } from './timeline-detail/timeline-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    HomeComponent,
    TimelineDetailComponent
  ],
  imports: [
    BrowserModule, NgxCarouselModule, AppRoutingModule, FormsModule
  ],
  providers: [TrackingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
