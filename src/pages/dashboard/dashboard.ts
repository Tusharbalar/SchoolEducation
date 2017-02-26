import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { initializeApp, database } from 'firebase';
import { AppService } from '../../service/app.service';

import { Account } from './account/account';
import { NewRequest } from './newRequest/newRequest';
import { AllRequest } from './allRequest/allRequest';

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
              public modalCtrl: ModalController,
              private af: AngularFire) {
    
  }

  allRequest() {
    let allRequest = this.modalCtrl.create(AllRequest);
    allRequest.present();
  }

  newRequest() {
    let newRequest = this.modalCtrl.create(NewRequest);
    newRequest.present();
  }

  account() {
    let account = this.modalCtrl.create(Account);
    account.present();
  }


}
