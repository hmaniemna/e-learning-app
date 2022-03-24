import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/classes/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.scss']
})
export class ManageStudentComponent implements OnInit {
  students!:Student[];

  constructor(private router:Router,
    private studentService: StudentService) { 
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

    // 1 employee details
    studentDetails(id:number){
      this.router.navigate(["student-details",id]);
    }
  
    //this fct: if clicked btn update takes you to the form with the values
    updateStudent(id: number){
     this.router.navigate(["update-student",id]);
    }
  
    deleteStudent(id: number){
     this.studentService.deleteStudent(id).subscribe(data =>{
      console.log(data);
      this.getStudents();
     });
    }

}
