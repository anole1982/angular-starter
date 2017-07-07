import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './indexeddb.routes';
import { IndexedDBComponent } from './indexeddb.component';
import { PersonFormComponent } from './indexeddb.person.form.component';
import { PersonListComponent } from './indexeddb.person.list.component';
console.log('`Person CURD` bundle loaded asynchronously');

@NgModule({
  declarations: [
    IndexedDBComponent,
    PersonFormComponent,
    PersonListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class IndexedDBModule {
  public static routes = routes;
}
