import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { PagereloadComponent } from './pagereload/pagereload.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { AddprojectComponent } from './addproject/addproject.component';
const routes: Routes = [{path:'',redirectTo:'/viewtask',pathMatch:'full'},
                       {path:'addproject', component:AddprojectComponent},
                       {path:'addtask', component:AddtaskComponent},
                       {path:'adduser', component:AdduserComponent},
                       {path:'viewtask', component:ViewtaskComponent},
                       {path:'pageload', component:PagereloadComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
