import { Component } from '@angular/core';

import { NavController, ActionSheetController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'joinRenew',
  templateUrl: 'joinRenew.html'
})

export class JoinRenew {

  public page1: boolean = true;
  public page2: boolean = false;
  public page3: boolean = false;

  public title: string = "Join/Renew";

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public actionSheetCtrl: ActionSheetController) {

  }

  onSubmit() {
    this.page1 = false;
    this.page2 = true;
    this.page3 = false;
  }

  makePayment() {
    this.page1 = false;
    this.page2 = false;
    this.page3 = true;
  }

  donePayment() {
    this.presentActionSheet();
  }

  goToSecondPage() {
    this.page1 = false;
    this.page2 = true;
    this.page3 = false;
  }

  goToFirstPage() {
    this.page1 = true;
    this.page2 = false;
    this.page3 = false;
  }

  presentActionSheet() {
   let actionSheet = this.actionSheetCtrl.create({
     title: 'Are you sure you want to submit ?',
     buttons: [
       {
         text: 'SUBMIT',
         handler: () => {
           this.presentLoadingDefault();
         }
       },
       {
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });

   actionSheet.present();
 }

 presentLoadingDefault() {
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();

  setTimeout(() => {
    loading.dismiss();
    localStorage.setItem("isLoggedIn", "yes");
  }, 5000);
}

}
