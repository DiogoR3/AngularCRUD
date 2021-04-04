import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from './person.model';
import { Router } from '@angular/router';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private router: Router, private personService: PersonService) { }

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
      this.filteredDataSource = this.dataSource.filter(p => p.name?.includes(this.search)) :
      this.filteredDataSource = [... this.dataSource];
  }

  addPerson() {
    this.personService.createPerson(this.personForm).subscribe(data => {
      
      this.dataSource.push(data)
      this.applyFilter()
    },
      error => console.log(error.message)
    )
  }

  selectRow(row) {
    console.log(row)
  }

  printDataSouce() {
    console.log({ dataSource: this.dataSource })
    console.log({ filteredDataSource: this.filteredDataSource })
  }

}
