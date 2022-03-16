import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
selector: 'app-manage-calendar',
 templateUrl: './manage-calendar.component.html',
 styleUrls: ['./manage-calendar.component.scss']
})
export class ManageCalendarComponent implements OnInit {

 constructor() { }

 ngOnInit(): void {
 }


 calendarOptions: CalendarOptions = {
  initialView: 'dayGridMonth'
};

}

