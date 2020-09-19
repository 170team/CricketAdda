import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.scss'],
})
export class UserTypeComponent implements OnInit {

  private userTypeArray = [];
  constructor() { }

  ngOnInit() {}

  userType(userRole : string) {
    this.userTypeArray.push(userRole);
    console.log("@@@@ " , this.userTypeArray);
    
  }

}
