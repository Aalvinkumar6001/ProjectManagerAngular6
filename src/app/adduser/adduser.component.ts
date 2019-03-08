import {Component, OnInit, ViewChild} from '@angular/core';
import { User } from './User';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import {MatSort,MatSortable,MatPaginator, MatTableDataSource} from '@angular/material';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  public UserModel :User = new User();
  public userArray=[];
  public errorMsg;
  constructor(private _userService : UserService,private router :Router ) { }

  displayedColumns: string[] = ['firstName', 'lastName', 'empId','edit','delete'];
  searchKey:String;
  dataSource;
  value;
  @ViewChild(MatSort) sort: MatSort;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
   this.getUsers();
  }
  getUsers(){
    this._userService.getUsers().subscribe(data =>{
      if(!data){
        return;
      }
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  
  }
  onSubmit(data){
    this.UserModel=data;
    this._userService.addUsers(this.UserModel)
    .subscribe(
      response => console.log('Success!', response),
    )
    this.getUsers();
    this.UserModel  =new User();
    this.router.navigateByUrl('/pageload', {skipLocationChange: true}).then(()=>
    this.router.navigate(["/adduser"])); 
  }

  onSelectEditUser(element){
    this.UserModel=element;
  }

  onSelectDeleteUser(element){
    this._userService.deleteUsers(element)
    .subscribe(
      response => console.log('Success!', response),
    )
    this.router.navigateByUrl('/pageload', {skipLocationChange: true}).then(()=>
    this.router.navigate(["/adduser"])); 
  }

  applyFilter(filterValue: string) {
    this.value=filterValue;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onClearFilter(){
    this.value=""
  }


  
}
