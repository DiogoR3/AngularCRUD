import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { environment } from '../../../environments/environment';
import { Person } from './person.model'
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) { }

  private readonly baseURL: string = environment.apiUrl + '/person'

  getPerson(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.baseURL);
  }

  getPersonById(id: number): Observable<Person> {
    return this.httpClient.get<Person>(this.baseURL);
  }

  createPerson(person: Person): Observable<Person> {
    return this.httpClient.post<Person>(this.baseURL, person);
  }

  deletePerson(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseURL}/${id}`)
  }

  showMessage(message: string) : void {
    this.snackBar.open(message, 'X', 
    { 
      duration: 3_000,
      horizontalPosition: 'right',
      verticalPosition: 'top', 
    })
  }
}