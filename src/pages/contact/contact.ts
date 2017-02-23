import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'contact',
  templateUrl: 'contact.html'
})

export class Contact {

  public title: string = "Schools & Clients";

  constructor(public navCtrl: NavController) {

  }

}
