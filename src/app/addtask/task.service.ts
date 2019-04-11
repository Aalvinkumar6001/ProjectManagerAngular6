import { Injectable } from '@angular/core';
import { Task } from 'src/app/addtask/Task';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = 'http://localhost:9000/task/';

  constructor(private http: HttpClient) { }
  private object = new BehaviorSubject<Task>(new Task());
  currentobject = this.object.asObservable();
  changeTask(passTask: Task) {
    this.object.next(passTask)
  }

  addTasks(task: Task): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `create`, task);
  }

  getParentTasks(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl + `parenttask/`}`);
  }


  getTaskdata(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }

  endTask(task: any): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `endtask/`, task);
  }


}
