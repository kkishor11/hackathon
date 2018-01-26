import { TimelineDetailComponent } from './../timeline-detail/timeline-detail.component';
import { TimelineComponent } from './../timeline/timeline.component';
import { HomeComponent } from './../home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'timeline', component: TimelineComponent },
    { path: 'timeline/:pnr', component: TimelineDetailComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];