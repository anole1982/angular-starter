import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { WebrtcService } from './webrtc.service';
console.log('`Web rtc` component loaded asynchronously');

@Component({
  selector: 'webrtc',
  template: `
    <div class="select">
      <label for="audioSource">Audio source: </label>
      <select #audioSelect (change)="onAudioSelectChange(audioSelect.value)">
        <option *ngFor="let deviceInfo of audioDeviceInfos;" value="{{deviceInfo.deviceId}}">
          {{deviceInfo.label}}
        </option>
      </select>
    </div>
    <div class="select">
      <label for="videoSource">Video source: </label>
      <select #videoSelect (change)="onVideoSelectChange(videoSelect.value)">
        <option *ngFor="let deviceInfo of videoDeviceInfos;" value="{{deviceInfo.deviceId}}">
          {{deviceInfo.label}}
        </option>
      </select>
    </div>
    <button (click)="onStart()">start </button>
    <button (click)="onStop()">stop </button>
    <ul>
      <ol *ngFor="let constraint of supportedConstraints">
          {{constraint}}
      </ol>
    </ul>
    <video #video autoplay="true" style="display:none;"></video>
    <canvas #canvas style="width:640px; height:480px;"></canvas>
  `
})
export class WebrtcComponent implements OnInit {
  public audioDeviceInfos = [];
  public videoDeviceInfos = [];
  public supportedConstraints = [];
  public constraints = {
    audio: {
      optional: []
    },
    video: {
      optional: []
    }
  };
  @ViewChild('video')
  private video: ElementRef;
  @ViewChild('canvas')
  private canvas: ElementRef;
  private localStream: MediaStream;
  constructor(private webrtcService: WebrtcService) {
  }
  public ngOnInit() {
    this.gotSupportedConstraints();
    this.webrtcService.enumerateDevices().then((deviceInfos) => {this.gotDevices(deviceInfos);});
  }
  public gotDevices(deviceInfos) {
    console.log('gotDevices');
    for ( let deviceInfo of deviceInfos) {
      if (deviceInfo.kind === 'audioinput') {
        this.audioDeviceInfos.push(deviceInfo);
      } else if (deviceInfo.kind === 'videoinput') {
        this.videoDeviceInfos.push(deviceInfo);
      } else {
        console.log('Found ome other kind of source/device: ', deviceInfo);
      }
      console.log(this.audioDeviceInfos, this.videoDeviceInfos);
    }
  }
  public gotSupportedConstraints() {
    let supportedConstraints = this.webrtcService.getSupportedConstraints();
    for (let constraint in supportedConstraints) {
      if (supportedConstraints.hasOwnProperty(constraint)) {
       this.supportedConstraints.push(constraint);
      }
    }
  }
  public onVideoSelectChange(value) {
      alert(value);
      this.constraints.video.optional.push({sourceId : value});
  }
  public onAudioSelectChange(value) {
    this.constraints.audio.optional.push({sourceId : value});
  }
  public onStart() {
    this.webrtcService.getUserMedia(this.constraints).then((stream) => {this.handlerStream(stream);});
  }
  public onStop() {
    if ( !!this.localStream ) {
      this.localStream.getTracks().forEach( (track) => {
        track.stop();
      });
    }
  }
  public handlerStream(stream) {
    let self = this;
    self.localStream = stream;
    if (window.URL) {
      this.video.nativeElement.src = window.URL.createObjectURL(stream);
    } else {
      this.video.nativeElement.src = stream;
    }
    let tick = function() {
      requestAnimationFrame(tick);
      let canvas = self.canvas.nativeElement;
      let context = canvas.getContext('2d');
      let width = parseInt(canvas.style.width);
      let height = parseInt(canvas.style.height);
      if (self.video.nativeElement.readyState === self.video.nativeElement.HAVE_ENOUGH_DATA) {
        // Load the video onto the canvas
        context.drawImage(self.video.nativeElement, 0, 0, width, height);
        // Load the image data from the canvas
        // let imageData = context.getImageData(0, 0, width, height);
      }
    }
    tick();
  }

}
