import { Component, OnInit, ViewChild } from '@angular/core';

import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'ourServices',
  templateUrl: 'ourServices.html'
})

export class OurServices implements OnInit {

  public title: string = "Our Services";
  public ourService;
  public heading;
  public list;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    let service = JSON.parse(localStorage.getItem("service"));
    this.ourService = service.data;
    this.heading = service.heading;
    this.list = service.list;
  }

}
