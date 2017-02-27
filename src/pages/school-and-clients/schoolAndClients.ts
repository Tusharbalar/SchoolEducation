import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'schoolAndClients',
  templateUrl: 'schoolAndClients.html',
  styles: [`
    .schoolClient {
      text-align:center;
      font-size:15px;
      border-bottom: 1px solid lightgray;
      padding: 7px;
    }
     .our-services-slides{
    height:inherit;
    border-top:2px solid gray;
    border-bottom:2px solid gray;
  }
  ion-slide{
      padding: 10px !important;
      color:white;
      height:initial !important;
    }
    .swiper-pagination swiper-pagination-clickable swiper-pagination-bullets{
      bottom:0px !important;
    }
    .slide1{
      background:#8cc245;
    }
    .slide2{
      background:#dc4092;
    }
    .slide3{
      background:#1baca4;
    }
    .slide4{
      background:#0f6daa;
    }
  `]
})

export class SchoolAndClients implements OnInit {

  public title: string = "School & Clients";
  public data;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    let schoolClient = JSON.parse(localStorage.getItem("schoolClient"));
    this.data = schoolClient;
    console.log(this.data);
  }

}
