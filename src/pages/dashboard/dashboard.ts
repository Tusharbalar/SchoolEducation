import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { initializeApp, database } from 'firebase';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html'
})

export class Dashboard {

  public headreTitle: string = "Dashboard";

  data;
  title;

  constructor(public navCtrl: NavController,
              public appService: AppService,
              private af: AngularFire) {
    
  }


}
