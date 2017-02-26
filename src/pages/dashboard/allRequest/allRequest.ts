import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'all-request',
  templateUrl: 'allRequest.html'
})

export class AllRequest implements OnInit{

  public title: string = "All Requests";

  constructor(private viewCtrl: ViewController) {

  }

  ngOnInit() {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
