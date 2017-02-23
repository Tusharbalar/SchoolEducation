import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'professionalDevelopment',
  templateUrl: 'professionalDevelopment.html'
})

export class ProfessionalDevelopment {

  public title: string = "Professional Development";

  constructor(public navCtrl: NavController) {

  }

}
