import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  PersOne : Person = new Person("Nicolas", "Tientcheu");

  constructor() { }

   //Method returning Person's informations
   getPerson(): Observable<Person> {
    return new Observable (Subscriber => {
      this.delay(3000).then(() => {
        (Subscriber.next(this.PersOne))
    })
  })
}
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms))
  }

}

