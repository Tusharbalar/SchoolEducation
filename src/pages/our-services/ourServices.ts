import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'ourServices',
  templateUrl: 'ourServices.html'
})

export class OurServices implements OnInit {

  public title: string = "Our Services";
  public ourService;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    let service = JSON.parse(localStorage.getItem("service"));
    this.ourService = service.data;
  }

}
