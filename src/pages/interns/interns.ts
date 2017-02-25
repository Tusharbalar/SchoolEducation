import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'interns',
  templateUrl: 'interns.html'
})

export class Interns implements OnInit {

  public title: string = "Interns";
  public interns;
  public list;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    let interns = JSON.parse(localStorage.getItem("interns"));
    this.interns = interns;
    this.list = interns.list;
    console.log(this.interns);
  }

}
