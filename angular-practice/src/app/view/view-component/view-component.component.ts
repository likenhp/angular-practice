import { Component, OnInit } from '@angular/core';
// import { TestService } from 'src/app/test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  httpName: string;
  response: any;

  constructor( private http: HttpClient) {
  }

  getUserData() {
    // let obs = this.http.get(`https://api.github.com/users/${this.httpName}`)
    this.http.get(`https://api.github.com/users/` + this.httpName)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response)
      })
  }

  ngOnInit(): void {
  }

}
