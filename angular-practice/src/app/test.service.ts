import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// Injectable means its an angular service

export class TestService {

  constructor() { }

  printToConsole(arg) {
    console.log(arg)
  }
}
