import { Component } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  people$;

  constructor(private http: HttpClient) { }

  fetchPeople() {
    this.people$ = this.http
      .get('../assets/data/people.json');
  }

  raiseHttpError() {
    this.people$ = this.http
      .get('../assets/data/unavailableendpoint.json');
  }
}
