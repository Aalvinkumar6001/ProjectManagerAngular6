import {Component, OnInit, ViewChild,PipeTransform} from '@angular/core';
import { Project } from 'src/app/addproject/Project';
import { ProjectService } from 'src/app/addproject/project.service';
import { UserService } from 'src/app/adduser/user.service';
import { RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {MatSort,MatSortable,MatPaginator, MatTableDataSource} from '@angular/material';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {
  public ProjectModel= new Project(); 
  public userList=[];   
  public projectList=[]; 
  public errorMsg;
  isDisabled = true;
  public data;

  constructor(private _projectService:ProjectService,private _userService:UserService,private router :Router) { }
  

  ngOnInit() {
  //   this.data = 
  //   [
  //   {'projectName':'Anil', 'priorityValue' :'anil.singh581@gmail.com', 'activeProject' :'14' },
  //   {'projectName':'Aaal', 'priorityValue' :'anil.singh581@gmail.com', 'activeProject' :'11' }   
  //  ]
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
  getUsers(){
    this._userService.getUsers()
    .subscribe(data => this.userList = data,
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
        .subscribe(
          response => console.log('Success!', response),
        )
        console.log(this.ProjectModel.startDate)
        this.getUsers();
        this.ProjectModel  =new Project();
        this.router.navigateByUrl('/pageload', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/adduser"])); 
      }
    
  triggerSomeEvent() {
      this.isDisabled = !this.isDisabled;
      return;
  }

}
