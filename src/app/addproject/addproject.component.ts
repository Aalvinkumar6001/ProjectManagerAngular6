import {Component, OnInit, ViewChild,PipeTransform} from '@angular/core';
import { Project } from 'src/app/addproject/Project';
import { ProjectService } from 'src/app/addproject/project.service';
import { UserService } from 'src/app/adduser/user.service';
import { RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { User } from 'src/app/adduser/User';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {
  public ProjectModel= new Project();
  //public selectUser;
  public userList=[];  
  public userList1=[]; 
  public projectList=[]; 
  public errorMsg;
  isDisabled = true;
  public data;
  public data1;

  constructor(private _projectService:ProjectService,private _userService:UserService,private router :Router) { }
  

  ngOnInit() {
    this.getUsers();
    this.getProjects();
  }
    
  search(term: string) {
    if(!term) {
      this.data = this.projectList;
    } else {
      this.data = this.data.filter(x => 
         x.projectName.trim().toLowerCase().includes(term.trim().toLowerCase())||
         x.priorityValue.toString().trim().toLowerCase().includes(term.trim().toLowerCase())||
         x.user.firstName.trim().toLowerCase().includes(term.trim().toLowerCase())
      );
    }
  }
  searchUser(term1: string) {
    if(!term1) {
      this.userList = this.userList1;
    } else {
      this.userList = this.userList.filter(x => 
        x.firstName.trim().toLowerCase().includes(term1.trim().toLowerCase())
      );
    }
  }
  changed(datauser:any){
  this.ProjectModel.selectUser=this.ProjectModel.user.firstName;
  console.log(this.ProjectModel.selectUser)
  }
  getUsers(){
    this._userService.getUsers()
    .subscribe(data => this.userList=this.userList1 = data,
      error => this.errorMsg = error);
    }
    
    getProjects(){
      this._projectService.getProjects()
      .subscribe(data =>this.projectList= this.data = data,
        error => this.errorMsg = error);
      
      }
    
      onSubmit(data){
        this.ProjectModel=data;
        this._projectService.addProjects(this.ProjectModel)
        .toPromise()
        .then(() => {
          this.getProjects();
          this.ProjectModel  =new Project();
          this.router.navigateByUrl('/pageload', { skipLocationChange: true }).then(() =>
          this.router.navigate(["/addproject"]));
        })
      }
      onUpdate(project){
        this.ProjectModel=project;
      }
      onSuspend(project){
        this._projectService.suspendProject(project)
        .toPromise()
        .then(() => {
          this.getProjects();
          this.router.navigateByUrl('/pageload', { skipLocationChange: true }).then(() =>
          this.router.navigate(["/addproject"]));
        })
      }
  triggerSomeEvent() {
      this.isDisabled = !this.isDisabled;
      return;
  }

}
