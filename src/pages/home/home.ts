import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})

export class Home {

  public title: string = "Home";

  items: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController,
              private af: AngularFire) {
    this.items = af.database.list('/home');
  }

}
