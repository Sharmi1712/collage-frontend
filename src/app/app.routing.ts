import { RouterModule, Routes } from '@angular/router';
import {AddStudentComponent} from "./student/add-student/add-student.component";
import {ListStudentComponent} from "./student/list-student/list-student.component";
import {EditStudentComponent} from "./student/edit-student/edit-student.component";

const routes: Routes = [ 
  { path: 'add-student', component: AddStudentComponent },
  { path: 'list-student', component: ListStudentComponent },
  { path: 'edit-student', component: EditStudentComponent }  
];

export const routing = RouterModule.forRoot(routes);