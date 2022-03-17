import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-h',
  templateUrl: './header-h.component.html',
  styleUrls: ['./header-h.component.scss']
})
export class HeaderHComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  LogToAccount($myParam: string = ''): void {
    const navigationDetails: string[] = ['/login'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }

  GoToSection($myParam: string = ''): void {
    const navigationDetails: string[] = ['/sections'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }

}
