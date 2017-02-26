import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'account',
  templateUrl: 'account.html'
})

export class Account implements OnInit{

  public title: string = "Account";

  constructor(private viewCtrl: ViewController) {

  }

  ngOnInit() {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
