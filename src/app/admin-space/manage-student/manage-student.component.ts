import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/classes/student';
import { StudentService } from 'src/app/services/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.scss']
})
export class ManageStudentComponent implements OnInit {
  students!:Student[];

  constructor(private router:Router,
    private studentService: StudentService,
    route: ActivatedRoute) { 
    this.getStudents();
  }

  ngOnInit(): void {
  }
  
  //show the list of students
  getStudents(){
    this.studentService.getStudentList().subscribe(data => {
      this.students=data;
    })
  }

    // 1 student details
    studentDetails(idS:number){
      this.router.navigate(["student-details",idS]);
    }
  
    //this fct: if clicked btn update takes you to the form with the values
    updateStudent(idS: number){
     this.router.navigate(["update-student",idS]);
    }
  
    deleteStudent(id: number){
     this.studentService.deleteStudent(id).subscribe(data =>{
      console.log(data);
      this.getStudents();
     });
    }

}
