import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Person, emptyPerson } from './person.model';
import { PersonService } from './person.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../shared/modules/dialog/dialog.component';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(router: Router, private personService: PersonService, private dialog: MatDialog) { }

  displayedColumns: string[] = ['id', 'name', 'cpf', 'email', 'phone', 'birthday', 'action'];
  dataSource: MatTableDataSource<Person>;
  loaded: boolean;
  search: string;

  personForm: Person = emptyPerson();

  ngOnInit(): void {

    this.loaded = false;
    this.personService.getPerson().subscribe(
      data => this.dataSource = new MatTableDataSource<Person>(data),
      error => console.log(error.message),
      () => {
        this.loaded = true;
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
  }

  private removeFromDataSource(person: Person) {
    const index = this.dataSource.data.indexOf(person);

    if (index > -1) {
      this.dataSource.data.splice(index, 1);
    }
  }

  deleteRow(rowId: number): void {
    if (!rowId) return

    this.personService.deletePerson(rowId).subscribe(data => {
      this.removeFromDataSource(this.personForm)
      this.personService.showMessage('Person deleted!')
    },
      error => this.personService.showMessage('Could not delete person!')
    )
  }

}

