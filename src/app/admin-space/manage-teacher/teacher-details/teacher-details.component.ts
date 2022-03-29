import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Teacher } from 'src/app/classes/teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.scss']
})
export class TeacherDetailsComponent implements OnInit {

  id!:number;
  teacher!:Teacher;

  constructor(private teacherService:TeacherService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.teacher=new Teacher();
    this.teacherService.getTeacherById(this.id).subscribe(data =>{
      this.teacher=data;
    })
  }

}
