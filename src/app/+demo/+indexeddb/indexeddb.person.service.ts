import { Injectable } from '@angular/core';
import Dexie from 'dexie';
// import { TypedJSON } from 'typedjson-npm';
import { Person } from './indexeddb.person.entity';
import { DexieService } from '../../core/dexie.service';

@Injectable()
export class PersonService {
  private table: Dexie.Table<Person, string>;

  constructor(private dexieService: DexieService) {
    this.table = this.dexieService.table('persons');
  }

  public selectAll() {
    return this.table.toArray();
  }

  public insert(person:any|any[]) {
    // let personJSON = JSON.parse(TypedJSON.stringify(person));
    if(person instanceof Array){
      return this.table.bulkAdd(person);
    }else{
      return this.table.add(person);
    }
  }
  public clear(){
    return this.table.clear();
  }

  public update(id, person: Person) {
    return this.table.update(id, person);
  }

  public remove(id) {
    return this.table.delete(id);
  }
}
