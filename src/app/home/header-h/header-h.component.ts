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
}
