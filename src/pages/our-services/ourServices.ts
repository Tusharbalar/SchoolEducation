import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'ourServices',
  templateUrl: 'ourServices.html'
})

export class OurServices {

  public title: string = "Our Services";

  constructor(public navCtrl: NavController) {

  }

}
