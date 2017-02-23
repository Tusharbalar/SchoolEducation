import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'professionalDevelopment',
  templateUrl: 'professionalDevelopment.html'
})

export class ProfessionalDevelopment {

  public title: string = "Schools & Clients";

  constructor(public navCtrl: NavController) {

  }

}
