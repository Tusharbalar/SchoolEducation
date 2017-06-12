import { Component } from '@angular/core';

@Component({
  selector: 'boardOfAdvisor',
  templateUrl: 'boardOfAdvisor.html',
  styles: [`
    ion-slides{
        height: initial !important;
    }
    img{
        display:block !important;
        margin:auto !important;
    }
  `]
})

export class BoardOfAdvisor{

  public headreTitle: string = "Advisory Board";

  constructor(){ 
  }

}
