import { Component, OnInit, Input } from '@angular/core';
import {User} from './user.model';

@Component({
  selector: 'address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit { 
  // using implements on interface means Angular knows that interface is being used, 
  // like a compiled run check (doesn't do anything other than warn you)

  // user: any;
  @Input('user') user: User;
  isCollapsed: boolean = true;

  constructor() {

  }
  
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed
  }

  ngOnInit() {
    // this.user = {
    //   name: this.userObj.name,
    //   designation: this.userObj.designation,
    //   address: this.userObj.address,
    //   phone: this.userObj.phone
    // };
  }


}

/*
Life Cycle
constructor creates the instance and executes the code
  would not be able to set the @Input yet so nothing displays in this.username if this.user is in constructor
ngOnInit
  called based on certain milestones
  is a lifestyle hook that runs when the component is fully initialized

ngOnChanges is for Ifata-bound input properties

*/