import { TrackingRecord } from './data/trackingReocrd';
import { Injectable } from '@angular/core';
import { TrackingRecords } from './data/trackingRecords';

@Injectable()
export class TrackingService {

  constructor() { }

  getTrackingRecord(pnr: string): TrackingRecord {
    return TrackingRecords.filter((record) => (record.pnr === pnr))[0];
  }

}
