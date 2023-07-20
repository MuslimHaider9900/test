import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getUsers(page: number): Observable<any> {
    const url = 'https://reqres.in/';
    return this.http.get<any>('https://reqres.in/api/users?page=' + page.toString());// we can create a seprate service for http which will have all http methods and call those from this service
  }
}
