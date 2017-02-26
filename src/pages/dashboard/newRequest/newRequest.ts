import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'new-request',
  templateUrl: 'newRequest.html'
})

export class NewRequest implements OnInit{

  public title: string = "New Request";

  constructor(private viewCtrl: ViewController) {

  }

  ngOnInit() {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
