import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'professionalDevelopment',
  templateUrl: 'professionalDevelopment.html'
})

export class ProfessionalDevelopment implements OnInit {

  public title: string = "Professional Development";
  public data;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    let professionalDevelopment = JSON.parse(localStorage.getItem("professionalDevelopment"));
    this.data = professionalDevelopment;
  }

}
