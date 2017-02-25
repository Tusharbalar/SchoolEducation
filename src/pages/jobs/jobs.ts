import { Component, ViewChild } from '@angular/core';

import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'jobs',
  templateUrl: 'jobs.html'
})

export class Jobs {

  public title: string = "Jobs";
  public page1: boolean = true;
  public page2: boolean = false;
  public page3: boolean = false;

  constructor(public navCtrl: NavController) {
  }

  goToSecondPage() {
    this.page1 = false;
    this.page2 = true;
    this.page3 = false;
  }

  goToThirdPage() {
    this.page1 = false;
    this.page2 = false;
    this.page3 = true;
  }

  goToFirstPage() {
    this.page1 = true;
    this.page2 = false;
    this.page3 = false;
  }

}
