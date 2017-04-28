import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router : Router) {}

  public onRouteClick(location : string) {
    this.router.navigate([location]);
  }

  public info = {
    emailAddress: 'valleyhicc@gmail.com',
    phoneNumber: '1 800 000 0000',
    companyName: 'Valley Hi Country Club',
    companyDescription: 'Description for valley hi'
  };

  public mainNavLinks : {name:string,path:string}[] = [
    {name:'Home',path:'/home'},
    {name:'Services',path:'/services'},
    {name:'Contact Us',path:'/contact'}
  ];
}
