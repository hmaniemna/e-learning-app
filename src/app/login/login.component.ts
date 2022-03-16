import { Router } from '@angular/router';
import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {  
  }

  public ngOnInit(): void {}

 

  goToAdmin($myParam: string = ''): void {
    const navigationDetails: string[] = ['/admin-space'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }

}
