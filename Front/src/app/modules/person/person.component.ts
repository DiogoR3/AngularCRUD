import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from './person.model';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private personService: PersonService) { }

  displayedColumns: string[] = ['id', 'name', 'cpf', 'email', 'phone', 'birthday'];
  dataSource = new MatTableDataSource()
  personForm: Person = {
    name: null,
    cpf: null,
    email: null,
    phone: null,
    birthday: null
  }

  ngOnInit(): void {
  }

  applyFilter(event) {
    this.dataSource.filter = event.target.value

  }

  addPerson() {
    this.personService.createPerson(this.personForm).subscribe(result => {

    })
  }

  listAll() {
    this.personService.getPerson().subscribe(data => this.dataSource.data = data, error => console.log(error.message));
  }

  selectRow(row){
    console.log(row)
  }

}
