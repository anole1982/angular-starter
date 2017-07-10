import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

console.log('`indexeddb` component loaded asynchronously');
import { Person } from './indexeddb.person.entity';
@Component({
  selector: 'person-form',
  template: `
    <form>
      <p>
        <span>编码</span>
        <input name="code" [(ngModel)]="person.code" type="text"/>
      </p>
      <p>
        <span>姓名</span>
        <input name="name" [(ngModel)]="person.name" type="text"/>
      </p>
      <p>
        <span>体重</span>
        <input name="weight" [(ngModel)]="person.weight" type="number"/>
      </p>
      <p>
        <span>生日</span>
        <input name="brithday" [(ngModel)]="person.brithday" type="date"/>
      </p>
      <p>
        <span>简历</span>
        <input name="resume" [(ngModel)]="person.resume" type="file"/>
      </p>
      <p>
        <span>照片</span>
        <input name="photo" [(ngModel)]="person.photo" type="file" accept="image/*" capture="camera"/>
      </p>
      <p>
        <span>视频</span>
        <input name="audio" [(ngModel)]="person.audio" type="file" accept="video/*" capture="camcorder"/>
      </p>
      <p>
        <span>录音</span>
        <input name="audio" [(ngModel)]="person.audio" type="file" accept="audio/*" capture="microphone"/>
      </p>
      <p>
        <button type="submit" (click)="onSaveButtonClick()">保存</button>
      </p>
    </form>
  `
})
export class PersonFormComponent implements OnInit {

  public person: Person = new Person();
  @Input('person')
  public editPerson:Person;
  @Output('onsave')
  public onsave = new EventEmitter<Person>();
  public ngOnInit() {
    console.log('hello `Indexed DB Form` component');
  }
  public onSaveButtonClick() {
      this.onsave.emit(this.person);
  }
}
