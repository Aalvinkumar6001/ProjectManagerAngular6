import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/addtask/Task';
import { ProjectService } from 'src/app/addproject/project.service';
import { UserService } from 'src/app/adduser/user.service';
import { TaskService } from 'src/app/addtask/task.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  public TaskModel = new Task();
  public userList = [];
  userList1= [];
  public projectList = [];
  projectList1=[];
  public parentList = [];
  parentList1=[];
  taskList
  public errorMsg;
  isDisabled = true;
  passTask:Task

  constructor(private router :Router,private _taskService: TaskService, private _projectService: ProjectService, private _userService: UserService) { }

  ngOnInit() {
    this._taskService.currentobject.subscribe(passTask => this.passTask=passTask)    
    this.TaskModel=this.passTask
    this.getProjects();
    this.getUsers();
    this.getParentTasks();
  }

  onSubmit(data: any) {
    console.log(data)
    this.TaskModel = data;
    this._taskService.addTasks(this.TaskModel)
    .toPromise()
    .then(() => {
      this.getParentTasks();
      this.getUsers();   
      this.getProjects();
      this.getTaskdata();
      
      this.TaskModel= null
      this.router.navigateByUrl('/pageload', { skipLocationChange: true }).then(() =>
      this.router.navigate(["/viewtask"]));
    })
  
  }
  getTaskdata(){
    this._taskService.getTaskdata()
    .subscribe(data => this.taskList= data,
    error => this.errorMsg = error);
  }
  getParentTasks() {
    this._taskService.getParentTasks()
      .subscribe(data => this.parentList=this.parentList1 = data,
      error => this.errorMsg = error);

  }
  getUsers() {
    this._userService.getUsers()
      .subscribe(data => this.userList=this.userList1 = data,
      error => this.errorMsg = error);
  }

  getProjects() {
    this._projectService.getProjects()
      .subscribe(data => this.projectList=this.projectList1 = data,
      error => this.errorMsg = error);
  }
  triggerSomeEvent() {
    this.isDisabled = !this.isDisabled;
    return;
  }
  changeduser(datauser: any) {
    this.TaskModel.selectUser = this.TaskModel.user.firstName;
  }
  changedproject(datauser: any) {
    this.TaskModel.selectProject = this.TaskModel.project.projectName;
  }
  changedparent(datauser: any) {
    this.TaskModel.selectParent = this.TaskModel.parentTaskData.parentTaskName;
  }
  searchProject(term1: string){
    if(!term1) {
      this.projectList = this.projectList1;
    } else {
      this.projectList = this.projectList.filter(x => 
        x.projectName.trim().toLowerCase().includes(term1.trim().toLowerCase())
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
  searchParent(term1: string) {
    if(!term1) {
      this.parentList = this.parentList1;
    } else {
      this.parentList = this.parentList.filter(x => 
        x.parentTask.trim().toLowerCase().includes(term1.trim().toLowerCase())
      );
    }
  }
}
