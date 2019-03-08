import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:9000/user/';
  constructor(private http:HttpClient) { }


addUsers(user: User) : Observable<any> {
    return this.http.post(`${this.baseUrl}` + `create`, user);
}

getUsers(): Observable<any>{
  return this.http.get<any>(`${this.baseUrl}`);
}

deleteUsers(user: any) : Observable<any> {
  return this.http.post(`${this.baseUrl}` + `delete`, user);
}


}
