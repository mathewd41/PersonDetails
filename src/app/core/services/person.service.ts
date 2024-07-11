import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';
import { HttpClient } from '@angular/common/http';
import { filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private url = 'assets/persons.json';

  constructor(private htppClient : HttpClient) { }

  getPersonList(): Observable<Person[]> {
    return this.htppClient.get<Person[]>(this.url);
  }

}
