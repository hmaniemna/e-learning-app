//we'll use activatedRouter to retrieve the id from the rout it has some properties like params or url or snapshot

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Student } from 'src/app/classes/student';
import { StudentService } from 'src/app/services/student.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {

id!:number;
student:Student = new Student();

//for the validation
create= new FormGroup({
  email: new FormControl('',Validators.required),
  password: new FormControl('',Validators.required),
  levell: new FormControl(0,Validators.required),
  access: new FormControl(0,Validators.required),
  firstname: new FormControl('',Validators.required),
  lastname: new FormControl('',Validators.required),
  groupe: new FormControl('',Validators.required)
})

  constructor(private studentService: StudentService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    //to fill the form with the student data by the getStudentById
    this.id=this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe(data =>{
      this.student=data;
    },
    error=> console.log(error));
  }

  //for the validation to get the values from all fields
  get email(){return this.create.get('email')}
  get password(){return this.create.get('password')};
  get levell(){return this.create.get('levell')};
  get access(){return this.create.get('access')};
  get firstname(){return this.create.get('firstname')};
  get lastname(){return this.create.get('lastname')};
  get groupe(){return this.create.get('groupe')};


  onSubmit(){
    this.studentService.updateStudent(this.id,this.student).subscribe(data =>{ 
      this.goToStudentList();
    },
    error => console.log(error));
    
  }
  
  goToStudentList(){
    this.router.navigate(['/manage-student']);
  }

}
