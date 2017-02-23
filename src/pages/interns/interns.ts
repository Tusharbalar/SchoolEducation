import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'interns',
  templateUrl: 'interns.html'
})

export class Interns {

  public title: string = "Interns";

  constructor(public navCtrl: NavController) {

  }

}
