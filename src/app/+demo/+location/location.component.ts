import {
  Component,
  OnInit,
} from '@angular/core';
import { PositionService } from './location.service';
console.log('`Geo location` component loaded asynchronously');

@Component({
  selector: 'indexeddb',
  template: `
    <h1>single page of current geolocation </h1>
    <div>timestamp:{{positioni.timestamp}}</div>
    <div>accuracy:{{positioni.coords.accuracy}}</div>
    <div>altitude:{{positioni.coords.altitude}}</div>
    <div>latitude:{{positioni.coords.latitude}}</div>
    <div>longitude:{{positioni.coords.longitude}}</div>
    <div>speed:{{positioni.coords.speed}}</div>
    <div>altitudeAccuracy:{{positioni.coords.altitudeAccuracy}}</div>
    <h1>single page of static geolocation </h1>
    <div>timestamp:{{position.timestamp}}</div>
    <div>accuracy:{{position.coords.accuracy}}</div>
    <div>altitude:{{position.coords.altitude}}</div>
    <div>latitude:{{position.coords.latitude}}</div>
    <div>longitude:{{position.coords.longitude}}</div>
    <div>speed:{{position.coords.speed}}</div>
    <div>altitudeAccuracy:{{position.coords.altitudeAccuracy}}</div>
  `
})
export class LocationComponent implements OnInit {
  public position: Position;
  public positioni: Position;
  public positionPromise: Promise<Position>;
  private options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  constructor(private positionService: PositionService) {

  }
  public ngOnInit() {
    this.positionService.watchPosition(this.options).then((pos:Position) => {
      this.position = pos;
    });
    this.positionService.getCurrentPosition(this.options).then((pos:Position) => {
      this.positioni = pos;
    });

  }
}
