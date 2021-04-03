import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front';

  text: string = 'test';

  constructor(private httpClient: HttpClient) { }

  CallAPI() {
    
    this.httpClient.get<any>("/person").subscribe(result => {
      console.log(result);
    }, error => {
      console.error(error);
    })
  }
}
