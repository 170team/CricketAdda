import { Component, OnInit } from '@angular/core';
import { LoginObj } from '../Objects/loginObj';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 private login : LoginObj; 

  constructor() { }

  ngOnInit() {
  }

}
