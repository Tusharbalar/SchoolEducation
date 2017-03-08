import { Component } from '@angular/core';

@Component({
  selector: 'myPartners',
  templateUrl: 'myPartners.html',
  styles: [`
  img{
    width: 100px;
    height: auto;
    display:block;
    margin-left:auto;
    margin-right:auto;
    margin-top:10px;
  }
  p{
        text-align:center !important;
  }
  `]
})

export class MyPartners{

  public headreTitle: string = "My Partners";

  constructor(){
  }

}
