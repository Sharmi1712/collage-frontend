import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Student} from "../../model/student.model";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  students: Student[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {    
    this.apiService.getStudents()
      .subscribe( data => {
        this.students = data.result;
      });
  }

  deleteStudent(student: Student): void {
    this.apiService.deleteStudent(student.id)
      .subscribe( data => {
        this.students = this.students.filter(s => s !== student);
      })
  };

  editStudent(student: Student): void {
    window.localStorage.removeItem("editStudentId");
    window.localStorage.setItem("editStudentId", student.id.toString());
    this.router.navigate(['edit-student']);
  };

  addStudent(): void {
    this.router.navigate(['add-student']);
  };
}