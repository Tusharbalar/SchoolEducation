import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'jobs',
  templateUrl: 'jobs.html'
})

export class Jobs {

  public title: string = "Schools & Clients";

  constructor(public navCtrl: NavController) {

  }

}
