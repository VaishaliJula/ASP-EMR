import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

loginTitle = 'Sign In';
showDifferentView: boolean = false;
  toggleView(): void {
    console.log(this.showDifferentView);
    console.log("function called");
    this.showDifferentView = !this.showDifferentView;
    console.log(this.showDifferentView);
  }
  constructor() { }

  ngOnInit() {
  }

}
