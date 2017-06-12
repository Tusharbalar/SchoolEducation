import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'contact',
  templateUrl: 'contact.html',
  styles: [`
    .csOne{
      ion-icon{
        color:$color2;
      }
    }
    .csTwo{
      ion-icon{
        color:$color5;
      }
    }
    .csThree{
      ion-icon{
        color:$color4;
      }
    }
    .csFour{
      ion-icon{
        color:$color1;
      }
    }
  `]
})

export class Contact {

  public title: string = "Contact";

  constructor(public navCtrl: NavController) {

  }

}
