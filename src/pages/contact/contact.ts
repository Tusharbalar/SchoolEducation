import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'contact',
  templateUrl: 'contact.html'
})

export class Contact {

  public title: string = "Contact";

  constructor(public navCtrl: NavController) {

  }

}
