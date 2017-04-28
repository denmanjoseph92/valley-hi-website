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
    emailAddress: 'valleyhicc@valleyhicc.com',
    phoneNumber: '(916) 684 2120',
    companyName: 'Valley Hi Country Club',
    companyDescription: 'Description for valley hi'
  };

  public mainNavLinks : {name:string,path:string,subpaths:any[]}[] = [
    {name:'History', path:'/history', subpaths:[]},
    {
      name:'Membership',
      path:'/membership',
      subpaths:[
        {name:'Benefits Of Membership', path:'/benefits'},
        {name:'Types Of Membership', path:'/types'},
        {name:'Gold Card Program', path:'/gold-card'},
        {name:'Club Fees', path:'/fees'},
        {name:'Pool', path:'/pool'}
      ]
    },
    {
      name:'Golf',
      path:'/golf',
      subpaths:[
        {name:'Course Tour', path:'/course-tour'},
        {name:'Course Update', path:'/course-update'},
        {name:'Scorecard', path:'/scorecard'},
        {name:'Pro Shop', path:'/pro-shop'},
        {name:'Practice Facilities', path:'/practice-facilities'},
        {name:'Tournaments', path:'/tournaments'}
      ]
    },
    {
      name:'Weddings',
      path:'/weddings',
      subpaths:[
        {name:'Fairway Package', path:'/fairway-package'},
        {name:'Lakeside Package', path:'/lakeside-package'},
        {name:'Wedding Album', path:'/album'}
      ]
    },
    {
      name:'Experience',
      path:'/experience',
      subpaths:[
        {name:'Course Aerial Tour', path:'/aerial-tour'},
        {name:'Clubhouse', path:'/clubhouse'},
        {name:'Dining', path:'/dining'}
      ]
    },
    {
      name:'Events',
      path:'/events',
      subpaths:[
        {name:'Future Events', path:'/future-events'},
        {name:'Ballroom Information', path:'/ballroom-info'}
      ]
    },
    {
      name:'Contact Us',
      path:'/contact-us',
      subpaths:[
        {name:'Map & Directions', path:'/map'}
      ]
    }
  ];
}
