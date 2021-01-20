import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],      
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      course: ['', Validators.required]      
    });

  }

  onSubmit() {
    this.apiService.createStudent(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-student']);
      });
  }

}