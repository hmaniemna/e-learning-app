import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/classes/student';
import { StudentService } from 'src/app/services/student.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {

  student: Student= new Student();

  //for the validation
  create= new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(3)]),
    levell: new FormControl(0,Validators.required),
    access: new FormControl(0,Validators.required),
    firstname: new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required),
    groupe: new FormControl('',Validators.required)
  })

  constructor(private studentService: StudentService,
    private router:Router) { }

  ngOnInit(): void {
    
  }

  //for the validation to get the values from all fields 
  get email(){return this.create.get('email')}
  get password(){return this.create.get('password')};
  get levell(){return this.create.get('levell')};
  get access(){return this.create.get('access')};
  get firstname(){return this.create.get('firstname')};
  get lastname(){return this.create.get('lastname')};
  get groupe(){return this.create.get('groupe')};

  saveStudent(){
    this.studentService.createStudent(this.student).subscribe( data =>{
      console.log(data);
      this.goToStudentList();
    },
    error => console.log(error));
  }

  goToStudentList(){
    this.router.navigate(['/manage-student']);
  }
  
  onSubmit(){
    console.log(this.student);
    this.saveStudent();
  }

}
