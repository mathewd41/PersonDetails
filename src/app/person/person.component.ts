import { Component } from '@angular/core';
import { PersonService } from '../core/services/person.service';
import { Person } from '../core/models/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
  persons: Array<Person> = []
  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getPersonList().subscribe(
      value => this.persons = value
    )
  }
}
