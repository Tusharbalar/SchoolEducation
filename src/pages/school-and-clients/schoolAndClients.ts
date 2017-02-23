import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'schoolAndClients',
  templateUrl: 'schoolAndClients.html'
})

export class SchoolAndClients {

  public title: string = "Schools & Clients";

  constructor(public navCtrl: NavController) {

  }

}
