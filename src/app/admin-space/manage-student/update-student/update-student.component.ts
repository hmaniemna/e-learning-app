//we'll use activatedRouter to retrieve the id from the rout it has some properties like params or url or snapshot

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Student } from 'src/app/classes/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {

id!:number;
student:Student = new Student();

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
