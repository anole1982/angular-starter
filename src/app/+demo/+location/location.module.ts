import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './location.routes';
import { LocationComponent } from './location.component';
import { PositionService }from './location.service';
console.log('`Person CURD` bundle loaded asynchronously');

@NgModule({
  declarations: [
    LocationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers:[
    PositionService
  ]
})
export class LocationModule {
  public static routes = routes;
}
