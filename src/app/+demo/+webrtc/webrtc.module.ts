import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './webrtc.routes';
import { WebrtcComponent } from './webrtc.component';
import { WebrtcService } from './webrtc.service';
console.log('`Person CURD` bundle loaded asynchronously');

@NgModule({
  declarations: [
    WebrtcComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    WebrtcService
  ]
})
export class WebrtcModule {
  public static routes = routes;
}
