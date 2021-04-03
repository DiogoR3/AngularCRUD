import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { environment } from '../../../environments/environment';
import { Person } from './person.model'

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient: HttpClient) { }

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

}