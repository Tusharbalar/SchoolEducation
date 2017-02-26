import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'joinRenew',
  templateUrl: 'joinRenew.html'
})

export class JoinRenew {

  public page1: boolean = true;
  public page2: boolean = false;

  public title: string = "Join/Renew";

  constructor(public navCtrl: NavController) {

  }

  onSubmit() {
    this.page1 = false;
    this.page2 = true;
  }

}
