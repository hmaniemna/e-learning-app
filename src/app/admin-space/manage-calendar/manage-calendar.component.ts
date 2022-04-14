import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
selector: 'app-manage-calendar',
 templateUrl: './manage-calendar.component.html',
 styleUrls: ['./manage-calendar.component.scss']
})
export class ManageCalendarComponent implements OnInit {

 constructor(private router: Router) { }

 ngOnInit(): void {
 }

 AccessCalendar($myParam: string = ''): void {
    const navigationDetails: string[] = ['/calendar'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }

    
}
