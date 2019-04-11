import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/addtask/task.service';
import { RouterModule, Router } from '@angular/router';
import { Task } from 'src/app/addtask/Task';
@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {
  public taskList =[];
  public errorMsg;
  public data;
  public data1

  passTask:Task;
  constructor(private router :Router,private _taskService: TaskService) { }
  ngOnInit() {
    this._taskService.currentobject.subscribe(passTask => this.passTask=passTask)    
    this.getTaskdata();
    
  }
getTaskdata(){
  this._taskService.getTaskdata()
  .subscribe(data => this.taskList=this.data= data,
  error => this.errorMsg = error);
}
onSelectEndTask(data){
  this._taskService.endTask(data)
  .subscribe(
    response => console.log('Success!', response),
  )
this.router.navigateByUrl('/pageload', {skipLocationChange: true}).then(()=>
this.router.navigate(["/viewtask"])); 
}
onSelectEditTask(data){
  this._taskService.changeTask(data)
  this.router.navigateByUrl('/pageload', {skipLocationChange: true}).then(()=>
  this.router.navigate(["/addtask"])); 
}
}
