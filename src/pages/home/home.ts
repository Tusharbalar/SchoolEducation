import { Component, OnInit } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { initializeApp, database } from 'firebase';
import { AppService } from '../../service/app.service';
import { JoinRenew } from '../join-renew/joinRenew';

@Component({
  selector: 'home',
  templateUrl: 'home.html',
  styles: [`
  .logo{ 
    width:100px;
    margin:auto;
 }
  `]
})

export class Home implements OnInit {

  public headreTitle: string = "Home";

  data;
  title;

  constructor(public navCtrl: NavController,
              public appService: AppService,
              public appCtrl: App,
              private af: AngularFire) {
    appService.getAllData();
  }

  ngOnInit() {
    let homeData = JSON.parse(localStorage.getItem("home"));
    this.title = homeData.title;
    this.data = homeData.data;
  }

  aa(data) {
    console.log("DSADSAD", data)
  }

  openJoinRenew() {
    this.appCtrl.getRootNav().setRoot(JoinRenew);
  }

}
