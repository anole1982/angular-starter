import {
  Component,
  OnInit,
} from '@angular/core';
import { Person } from './indexeddb.person.entity';

console.log('`ChildDetail` component loaded asynchronously');

@Component({
  selector: 'indexeddb',
  template: `
    <h1>single page of Indexed DB </h1>
    <person-form [person]="selected" (onsave)="onSaveEvent($event)"></person-form>
    <hr/>
    <person-list [persons]="persons" (onselect) = onSelectEvent($event)></person-list>
  `,
})
export class IndexedDBComponent implements OnInit {
  public persons:Person[];
  public selected:Person;
  public ngOnInit() {
    console.log('hello `Indexed DB` component');
  }
  public onSaveEvent(person){
    console.log(person);
  }
  public onSelectEvent(person){
    this.selected = person;
  }

}
