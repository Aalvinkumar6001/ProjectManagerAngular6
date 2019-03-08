import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdduserComponent } from './adduser/adduser.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { PagereloadComponent } from './pagereload/pagereload.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSortModule, MatFormFieldModule,MatTableModule,
        MatPaginatorModule,MatButtonModule,MatIconModule, MatInputModule } from '@angular/material';
import { UserService } from './adduser/user.service';
import {DataTableModule} from "angular-6-datatable";

@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    HeaderComponent,
    FooterComponent,
    ViewtaskComponent,
    AddtaskComponent,
    AddprojectComponent,
    PagereloadComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSortModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    DataTableModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
