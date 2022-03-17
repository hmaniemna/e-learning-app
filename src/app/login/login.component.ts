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

 

  goToAccount($myParam: string = ''): void {
    const navigationDetails: string[] = [''];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }

}
