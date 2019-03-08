import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from 'src/app/addproject/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseUrl = 'http://localhost:9000/project/';
  constructor(private http:HttpClient) { }

  addProjects(project: Project) : Observable<any> {
    return this.http.post(`${this.baseUrl}` + `create`, project);
}


getProjects(): Observable<any>{
  return this.http.get<any>(`${this.baseUrl}`);
}

deleteProject(project: any) : Observable<any> {
  return this.http.post(`${this.baseUrl}` + `delete`, project);
}
}
