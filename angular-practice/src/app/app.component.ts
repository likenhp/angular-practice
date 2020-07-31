import { Component } from '@angular/core';
// import { User } from './address-card/user.model';
import { TestService } from './test.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular-practice-application';
  // user: User;
  // inputText: string = 'Initial value';

  // I need TestService

  httpName: string = 'likenhp';


  // the arg in constructor will inject the service into the constructor, can then store it in a variable
  // 1) injects the service
  // 2) lets angular know what other services you need
  // private creates a member variable so it can be used as this.variableName
  constructor (private svc: TestService, private http: HttpClient) {
    // this.user = new User();
    // this.user.name = 'Newman Son';
    // this.user.designation = 'Software Engineer';
    // this.user.address = '120 Main Street City State';
    // this.user.phone = [
    //   '123-456-7890',
    //   '456-123-0987',
    // ];

    this.svc.printToConsole('service should work');
  }

  ngOnInit() {
    let obs = this.http.get('https://api.github.com/users/likenhp'); // <-- this is an observable, not a promise per se, much more powerful
    obs.subscribe((response) => console.log('Got the response', response))
  }
}
