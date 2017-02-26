import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
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

import { CustomNavbar } from '../custom-component/navbar.component';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../custom-component/firebase.config.ts';

import { AppService } from '../service/app.service';

@NgModule({
  declarations: [
    MyApp,
    Home,
    OurServices,
    MyGoodSchool,
    ProfessionalDevelopment,
    SchoolAndClients,
    Jobs,
    LearningForwardIndia,
    JoinRenew,
    Contact,
    Interns,
    CustomNavbar,
    Dashboard
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    OurServices,
    MyGoodSchool,
    ProfessionalDevelopment,
    SchoolAndClients,
    Jobs,
    LearningForwardIndia,
    JoinRenew,
    Contact,
    Interns,
    CustomNavbar,
    Dashboard
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AppService]
})
export class AppModule {}
