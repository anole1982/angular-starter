import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './crypto.routes';
import { CryptoComponent } from './crypto.component';
import { CryptoService } from './crypto.service';
console.log('`Person CURD` bundle loaded asynchronously');

@NgModule({
  declarations: [
    CryptoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    CryptoService
  ]
})
export class CryptoModule {
  public static routes = routes;
}
