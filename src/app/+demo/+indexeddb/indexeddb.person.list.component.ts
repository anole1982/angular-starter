import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Person } from './indexeddb.person.entity';
console.log('`indexeddb` component loaded asynchronously');

@Component({
  selector: 'person-list',
  template: `
    <table>
      <tr *ngFor="let person of persons" (click)="onPersonSelected(person)">
        <td>{{person.id}}</td>
        <td>{{person.code}}</td>
        <td>{{person.name}}</td>
        <td>{{person.weight}}</td>
        <td>{{person.brithday}}</td>
        <td>{{person.photo}}</td>
      </tr>
    </table>
  `,
})
export class PersonListComponent implements OnInit {
  @Input('persons')
  public persons:Person[];
  @Output('onselect')
  public onselect = new EventEmitter<Person>();
  public ngOnInit() {
    console.log('hello `Indexed DB Form` component');
  }
  public onPersonSelected(person){
    this.onselect.emit(person);
  }
}
