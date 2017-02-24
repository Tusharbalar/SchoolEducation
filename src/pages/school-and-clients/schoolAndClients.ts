import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'schoolAndClients',
  templateUrl: 'schoolAndClients.html',
  styles: [`
    .schoolClient {
      text-align:center;
      font-size:15px;
      border-bottom: 1px solid lightgray;
      padding: 7px;
    }
  `]
})

export class SchoolAndClients implements OnInit {

  public title: string = "School & Clients";
  public data;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    let schoolClient = JSON.parse(localStorage.getItem("schoolClient"));
    this.data = schoolClient;
    console.log(this.data);
  }

}
