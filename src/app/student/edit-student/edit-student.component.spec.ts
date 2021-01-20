import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {Student} from "../../model/student.model";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditUserComponent implements OnInit {

  student: Student;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    let studentId = window.localStorage.getItem("editStudentId");
    if(!studentId) {
      alert("Invalid action.")
      this.router.navigate(['list-student']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],     
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      course: ['', Validators.required]      
    });
    this.apiService.getStudentById(+studentId)
      .subscribe( data => {
        this.editForm.setValue(data.result);
      });
  }

  onSubmit() {
    this.apiService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
            alert('Student updated successfully.');
            this.router.navigate(['list-student']);
          }else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }

}
