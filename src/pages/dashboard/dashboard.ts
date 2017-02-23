import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html'
})

export class Dashboard {

  public title: string = "Dashboard";

  constructor(public navCtrl: NavController) {

  }

}
