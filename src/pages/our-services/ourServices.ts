import { Component, OnInit, ViewChild } from '@angular/core';

import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'ourServices',
  templateUrl: 'ourServices.html',
  styles: [`
  .our-services-slides{
    height:inherit;
    border-top:2px solid gray;
    border-bottom:2px solid gray;
    bottom: 0px;
    position: absolute;
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

export class OurServices implements OnInit {

  public title: string = "Our Services";
  public ourService;
  public heading;
  public list;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    let service = JSON.parse(localStorage.getItem("service"));
    this.ourService = service.data;
    this.heading = service.heading;
    this.list = service.list;
  }

}
