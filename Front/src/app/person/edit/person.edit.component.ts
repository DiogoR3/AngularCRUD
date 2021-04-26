import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person.edit.component.html',
  styleUrls: ['./person.edit.component.css']
})
export class PersonEditComponent implements OnInit {

  personId: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    this.personId = this.route.snapshot.paramMap.get('id');
  } 
  
}
