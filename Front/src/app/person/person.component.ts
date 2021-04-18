import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Person } from './person.model';
import { Router } from '@angular/router';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private eRef: ElementRef, router: Router, private personService: PersonService) { }

  displayedColumns: string[] = ['id', 'name', 'cpf', 'email', 'phone', 'birthday'];
  dataSource: Person[]
  filteredDataSource: Person[]
  search: string
  loaded: boolean

  personForm: Person = {
    name: null,
    cpf: null,
    email: null,
    phone: null,
    birthday: null
  }

  ngOnInit(): void {

    this.loaded = false

    this.personService.getPerson().subscribe(
      data => this.dataSource = this.filteredDataSource = data,
      error => console.log(error.message),
      () => this.loaded = true
    )
  }

  applyFilter() {
    this.search ?
      this.filteredDataSource = this.dataSource.filter(p => p.name?.toLowerCase().includes(this.search.toLowerCase())) :
      this.filteredDataSource = [...this.dataSource];
  }

  addPerson() {
    this.personService.createPerson(this.personForm).subscribe(data => {
      
      this.dataSource.push(data)
      this.personService.showMessage('Person added!')
      this.applyFilter()
    },
      error => console.log(error.message)
    )
  }

  deletePerson(){

    if(!this.personForm.id) return

    this.personService.deletePerson(this.personForm.id).subscribe(data => {
      this.personService.showMessage('Person deleted!')
      this.dataSource = this.dataSource.filter(p => p.id != this.personForm.id)
      this.applyFilter()
    },
      error => this.personService.showMessage('Could not delete person!')
    )
  }

  setPerson(row: Person) {
      this.personForm = row
  }
}
