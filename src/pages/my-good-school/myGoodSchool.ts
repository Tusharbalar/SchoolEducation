import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'myGoodSchool',
  templateUrl: 'myGoodSchool.html'
})

export class MyGoodSchool implements OnInit {

  public title: string = "My Good School";
  public data;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    let myGoodSchool = JSON.parse(localStorage.getItem("myGoodSchool"));
    this.data = myGoodSchool.data;
  }

}
