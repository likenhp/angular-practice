import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-practice';
  // homeRoute: string = 'home';
  // settingsRoute: string = 'settings';

  routes = [
    {linkName: 'Home', url: 'home'},
    {linkName: 'Settings', url: 'settings'},
  ]

  constructor() {
    let returnArg: any = function foo<T> (arg: T): T {
      return arg
    }
    console.log('this is?', returnArg(1))
  }

}
