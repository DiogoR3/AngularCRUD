import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person.edit.component.html',
  styleUrls: ['./person.edit.component.css']
})

export class PersonEditComponent implements OnInit {

  personId: any;
  person: Observable<Person> = new Observable<Person>()

  constructor(private router: Router, private route: ActivatedRoute, private personService: PersonService) { }

  ngOnInit() {
    this.personId = this.route.snapshot.paramMap.get('id');
    this.person = this.personService.getPersonById(this.personId);
  }

  updatePerson(person: Person){
    this.personService.updatePerson(person).subscribe(data => {
      this.personService.showMessage('Person updated!')
      this.router.navigate(['/person'])
    },
      error => {
        this.personService.showMessage('Could not update person!')
        console.log(error)
      }
    )
  }
}
