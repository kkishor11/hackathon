import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  tracker = {};

  btnClick = function () {
    this.router.navigateByUrl('/timeline/' + this.tracker.pnr);
  };

}
