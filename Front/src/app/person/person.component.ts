import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from './person.model';
import { PersonService } from './person.service';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(router: Router, private personService: PersonService, private fb: FormBuilder) { }

  displayedColumns: string[] = ['id', 'name', 'cpf', 'email', 'phone', 'birthdate', 'action'];
  dataSource: MatTableDataSource<Person> = new MatTableDataSource<Person>();
  loaded: boolean;
  search: string;

  ngOnInit(): void {
    this.loaded = false

    this.personService.getPerson().subscribe(
      data => this.dataSource = new MatTableDataSource<Person>(data),
      error => console.log(error.message),
      () => this.loaded = true)
  }

  applyFilter() {
    this.dataSource.filter = this.search;
  }

  addPerson(person: Person) {
    this.personService.createPerson(person).subscribe(data => {
      this.personService.showMessage('Person added!')
      this.ngOnInit()
    },
      error => console.log(error)
    )
  }

  deletePerson(rowId: number): void {
    if (!rowId) return

    this.personService.deletePerson(rowId).subscribe(data => {
      this.personService.showMessage('Person deleted!')
      this.ngOnInit()
    },
      error => this.personService.showMessage('Could not delete person!')
    )
  }
}
