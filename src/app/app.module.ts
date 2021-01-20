import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';

import {routing} from "./app.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {ApiService} from "./service/api.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ListStudentComponent,
    AddStudentComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
