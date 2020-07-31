import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular-practice-application';
  user: User;
  inputText: string = 'Initial value';

  constructor () {

    this.user = new User();
    this.user.name = 'Newman Son';
    this.user.designation = 'Software Engineer';
    this.user.address = '120 Main Street City State';
    this.user.phone = [
      '123-456-7890',
      '456-123-0987',
    ];

  }
}
