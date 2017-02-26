import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Home } from '../pages/home/home';
import { Dashboard } from '../pages/dashboard/dashboard';
import { OurServices } from '../pages/our-services/ourServices';
import { MyGoodSchool } from '../pages/my-good-school/myGoodSchool';
import { ProfessionalDevelopment } from '../pages/professional-development/professionalDevelopment';
import { SchoolAndClients } from '../pages/school-and-clients/schoolAndClients';
import { Jobs } from '../pages/jobs/jobs';
import { LearningForwardIndia } from '../pages/learning-forward-india/learningForwardIndia';
import { JoinRenew } from '../pages/join-renew/joinRenew';
import { Contact } from '../pages/contact/contact';
import { Interns } from '../pages/interns/interns';
import { AppService } from '../service/app.service';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage;
  dashboard;
  showDashboard: boolean = false;

  pages: Array<{title: string, component: any, icon: any}>;

  constructor(public platform: Platform,
              public events: Events,
              public appService: AppService) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: Home, icon: 'ios-home-outline' },
      { title: 'Our Services', component: OurServices, icon: 'ios-sad-outline' },
      { title: 'My Good School', component: MyGoodSchool, icon: 'ios-bulb-outline' },
      { title: 'Professional Development', component: ProfessionalDevelopment, icon: 'ios-calendar-outline' },
      { title: 'Schools & Clients', component: SchoolAndClients, icon: 'ios-thumbs-up-outline' },
      { title: 'Jobs', component: Jobs, icon: 'ios-stats-outline' },
      { title: 'Interns', component: Interns, icon: 'ios-stats-outline' },
      { title: 'Learning Forward India', component: LearningForwardIndia, icon: 'ios-analytics-outline' },
      { title: 'Join/Renew', component: JoinRenew , icon: 'ios-paper-outline' },
      { title: 'Contact', component: Contact, icon: 'ios-book-outline' }
    ];

    this.dashboard = [
      { title: 'Dashboard', component: Dashboard, icon: 'ios-contact-outline' }
    ];

    if (localStorage.getItem("isLoggedIn")) {
      this.rootPage = Dashboard;
      this.showDashboard = true;
    } else {
      this.rootPage = Home;
      this.showDashboard = false;
    }

    this.events.subscribe("isLoggedIn", ()=> {
      this.showDashboard = true;
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
