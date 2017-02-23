import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'ourServices',
  templateUrl: 'ourServices.html'
})

export class OurServices {

  public title: string = "Schools & Clients";

  constructor(public navCtrl: NavController) {

  }

}
