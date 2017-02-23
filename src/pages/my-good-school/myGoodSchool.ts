import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'myGoodSchool',
  templateUrl: 'myGoodSchool.html'
})

export class MyGoodSchool {

  public title: string = "Schools & Clients";

  constructor(public navCtrl: NavController) {

  }

}
