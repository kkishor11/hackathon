import { TrackingRecord } from './../data/trackingReocrd';
import { TrackingService } from './../tracking.service';
import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-timeline-detail',
  templateUrl: './timeline-detail.component.html',
  styleUrls: ['./timeline-detail.component.css']
})
export class TimelineDetailComponent implements OnInit {

  record: TrackingRecord;

  constructor(private trackingService: TrackingService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.record = this.trackingService.getTrackingRecord(this.route.snapshot.params['pnr']);
  }

}
