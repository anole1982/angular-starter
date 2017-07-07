import { Injectable } from '@angular/core';

@Injectable()
export class PositionService {
    private geolocation = window.navigator.geolocation;
    private watchId;
    public getCurrentPosition(options) {
        return new Promise((resolve, reject) => {
          if (!this.geolocation || !this.geolocation.getCurrentPosition) {
            return reject(new Error('Geolocation not supported!'));
          }
          this.geolocation.getCurrentPosition(resolve, reject, options);
        });
    }
  public watchPosition (options) {
      return new Promise((resolve, reject) => {
        if (!this.geolocation || !this.geolocation.watchPosition) {
          return reject(new Error('Geolocation not supported!'));
        }
        this.watchId = this.geolocation.watchPosition(resolve, reject, options);
      });
    }
    public clearWatch() {
        this.geolocation.clearWatch(this.watchId);
    }
}
