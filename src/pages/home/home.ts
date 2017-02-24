import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { initializeApp, database } from 'firebase';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})

export class Home implements OnInit {

  public headreTitle: string = "Home";

  data;
  title;

  constructor(public navCtrl: NavController,
              public appService: AppService,
              private af: AngularFire) {
  }

  ngOnInit() {
    let homeData = JSON.parse(localStorage.getItem("home"));
    this.title = homeData.title;
    this.data = homeData.data;
  }

  aa(data) {
    console.log("DSADSAD", data)
  }

}
