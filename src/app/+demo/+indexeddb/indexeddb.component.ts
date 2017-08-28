import {
  Component,
  OnInit,
} from '@angular/core';
import { Person } from './indexeddb.person.entity';
import { PersonService } from './indexeddb.person.service';

@Component({
  selector: 'indexeddb',
  template: `
    <h1>single page of Indexed DB </h1>
    <person-form [person]="selected" (onsave)="onSaveEvent($event)"></person-form>
    <hr/>
    <person-list [persons]="persons" (onselect) = onSelectEvent($event)></person-list>
    <div>
      <span>自动插入条数</span>
      <input type="number" style="width:50px" [(ngModel)]="count"/>
      <button (click)="onInsertButtonClick()" >确定</button>
      <button (click)="onAddButtonClick()" >添加</button>
      <button (click)="onUpdateButtonClick()" >更新</button>
      <button (click)="onCleanButtonClick()" >清除</button>
    </div>
  `,
})
export class IndexedDBComponent implements OnInit {
  public persons: Person[] =[];
  public selected: Person;
  public count = 2 ;
  constructor(private personService: PersonService) {
  }
  public ngOnInit() {
    console.log('hello `Indexed DB` component');
    this.personService.selectAll().then((persons: Person[]) => {
      this.persons = persons;
    });
  }
  public onUpdateButtonClick(){
	this.persons[0].code = "23425235";
  }
  public onSaveEvent(person) {
    debugger;
    this.personService.insert(person);
  }
  public onAddButtonClick(){
    this.persons.push(new Person())
  }
  public onSelectEvent(person) {
    this.selected = person;
  }
  public onInsertButtonClick() {
    let ps = [];
    for (let i = 0; i < this.count; i++) {
      let person ={
        id:i,
        name:'name'+i,
        code:'code'+i,
        brithday:new Date(),
        photo:new Blob(["Hello World!"],{type:"text/plain"})
      };
      ps.push(person);
      // person.id = i;
      // person.name='name'+i;
      // person.brithday = new Date();
      // person.code='code'+i;

    }
    let now = new Date().getTime();
    this.personService.insert(ps).then(()=>{
      alert(new Date().getTime() - now);
    });
    console.log('hello `Indexed DB` component');
    this.personService.selectAll().then((persons: Person[]) => {
      this.persons = persons;
    });
  }
  public onCleanButtonClick(){
    let now = new Date().getTime();
    this.personService.clear().then(()=>{
      alert(new Date().getTime() - now);
    });
  }
}
