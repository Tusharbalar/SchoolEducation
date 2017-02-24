import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { initializeApp, database } from 'firebase';

@Injectable()
export class AppService {

  constructor(private af: AngularFire) {

  }

  allData = [];

  getAllData() {
    return database().ref().on('value', (snapshot) => {
      console.log("AAAAA", snapshot.val())
      let allData = JSON.stringify(snapshot.val());
      localStorage.setItem("home", JSON.stringify(snapshot.val().home));
      localStorage.setItem("service", JSON.stringify(snapshot.val().service));
      localStorage.setItem("myGoodSchool", JSON.stringify(snapshot.val().myGoodSchool));
      localStorage.setItem("professionalDevelopment", JSON.stringify(snapshot.val().professionalDevelopment));
      localStorage.setItem("schoolClient", JSON.stringify(snapshot.val().SchoolClient));
    });
  }

}
