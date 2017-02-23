import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'myGoodSchool',
  templateUrl: 'myGoodSchool.html'
})

export class MyGoodSchool {

  public title: string = "My Good School";

  constructor(public navCtrl: NavController) {

  }

}
