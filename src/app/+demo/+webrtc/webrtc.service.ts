import { Injectable } from '@angular/core';

@Injectable()
export class WebrtcService {
  private media = navigator.mediaDevices;
  public enumerateDevices() {
    return this.media.enumerateDevices();
  };
  public getUserMedia(constraints) {
    return this.media.getUserMedia(constraints);
  }
  public getSupportedConstraints() {
    return this.media.getSupportedConstraints();
  }
}
