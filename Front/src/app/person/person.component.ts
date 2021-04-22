import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Person, emptyPerson } from './person.model';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private eRef: ElementRef, router: Router, private personService: PersonService) { }

  displayedColumns: string[] = ['id', 'name', 'cpf', 'email', 'phone', 'birthday', 'action'];
  dataSource = new MatTableDataSource<Person>();
  loaded: boolean;
  search: string;

  personForm: Person = emptyPerson();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {

    this.loaded = false;

    this.personService.getPerson().subscribe(
      data => this.dataSource.data = data,
      error => console.log(error.message),
      () => {
        this.loaded = true;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
    )
  }

  applyFilter() {
    this.dataSource.filter = this.search;
  }

  addPerson() {
    this.personService.createPerson(this.personForm).subscribe(data => {
      this.addToDataSource(data)
      this.personService.showMessage('Person added!')
    },
      error => console.log(error.message)
    )
  }

  updatePerson() {
    this.personService.updatePerson(this.personForm).subscribe(data => {
      this.personService.showMessage('Person updated!')
    },
      error => this.personService.showMessage('Could not update person!')
    )
  }

  deletePerson() {

    if (!this.personForm.id) return

    this.personService.deletePerson(this.personForm.id).subscribe(data => {
      this.removeFromDataSource(this.personForm)
      this.personService.showMessage('Person deleted!')
    },
      error => this.personService.showMessage('Could not delete person!')
    )
  }

  setPerson(row: Person) {
    this.personForm = row
  }

  private addToDataSource(person: Person) {
    this.dataSource.data.push(person)
    this.dataSource.paginator = this.paginator;
  }

  private removeFromDataSource(person: Person) {
    const index = this.dataSource.data.indexOf(person);

    if (index > -1) {
      this.dataSource.data.splice(index, 1);
    }

    this.dataSource.paginator = this.paginator;
  }
}
